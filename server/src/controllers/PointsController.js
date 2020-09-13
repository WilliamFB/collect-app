const Point = require('../database/PointModel');

class PointsController {
    async create(req, res) {
        const point = new Point(req.body);
        const { name } = req.body;

        //Check if the point exists
        const pointExists = await Point.findOne({name: name});

        if(pointExists) return res.json({check: false, message: "This point already exists!"});

        //Check missing fields
        if (!req.body.name || !req.body.address || !req.body.latitude || !req.body.longitude)
            return res.json({check: false, message: "Missing fields!"});
        
        //Saving the point
        await point.save((err) => {
            if(err) return console.error(err);
        });

        return res.json({check: true, message: "Point created!"});
    }

    async show(req, res) {
        await Point.find((err, points) => {
            if(err) return console.error(err);

            return res.json(points);
        });
    }

    async edit(req, res) {
        const nameBeforeEdit = req.params.name;
        
        console.log(nameBeforeEdit)

        //Check if the point exists
        const pointExists = await Point.findOne({name: nameBeforeEdit});

        if(!pointExists) return res.json({check: false, message: "This point does not exist!"});

        //Check missing fields
        if (!req.body.name || !req.body.address || !req.body.latitude || !req.body.longitude)
            return res.json({check: false, message: "Missing fields!"});

        //Editing the point
        await Point.findOne({name: nameBeforeEdit}, (err, point) => {
            if(err) return console.error(err);
            
            point.name = req.body.name;
            point.address = req.body.address;
            point.latitude = req.body.latitude;
            point.longitude = req.body.longitude;

            point.save();
            
            return res.json({check: true, message: "Point edited!"});
        })
    }
}

module.exports = PointsController;