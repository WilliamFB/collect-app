const Point = require('../database/PointModel');

class PointsController {
    async create(req, res) {
        const point = new Point(req.body);
        const { name } = req.body;

        //Check if the point exists
        let pointExists = await Point.findOne({name: name});

        if(pointExists) return res.status(400).json({message: "This point already exists."});

        //Check missing fields
        if (!req.body.name || !req.body.address || !req.body.latitude || !req.body.longitude)
            return res.status(400).json({message: "Missing fields."});
        
        //Saving the point
        await point.save((err) => {
            if(err) return console.error(err);
        });

        return res.json({message: "Point created!"});
    }

    async show(req, res) {
        await Point.find((err, points) => {
            if(err) return console.error(err);

            return res.json(points);
        });
    }

    async edit(req, res) {
        const { name } = req.body;

        //Check if the point exists
        let pointExists = await Point.findOne({name: name});

        if(!pointExists)
            return res.status(400).json({message: "This point does not exist."});
        
        //Check missing fields
        if (!req.body.name || !req.body.address || !req.body.latitude || !req.body.longitude)
            return res.status(400).json({message: "Missing fields."});

        //Editing the point
        await Point.findOne({name: name}, (err, point) => {
            if(err) return console.error(err);
            
            point.name = req.body.name;
            point.address = req.body.address;
            point.latitude = req.body.latitude;
            point.longitude = req.body.longitude;

            point.save();
            
            return res.json({message: "Point edited!"});
        })
    }
}

module.exports = PointsController;