import pkg from '../../db/index.js';
export const { Topic } = pkg;

export const findOne = async (req, res) => {
    try {
        const doc = await Topic
            .findOne({ id: req.params.id });

        if (!doc) {
            return res.status(400).end();
        }

        res.status(200).json({ data: doc });

    } catch (e) {
        console.error(e);
        res.status(400).end();
    };
};

export const findAll = async (_, res) => {
    try {
        const doc = await Topic.findAll();

        if (!doc) {
            return res.status(400).end();
        };

        res.status(200).json({ data: doc });

    } catch (e) {
        console.error(e);
        res.status(404).end();
    }
};

export const create = async (req, res) => {
    try {
        const doc = await Topic
            .create(req.body);

        if (!doc) {
            return res.status(400).end();
        }

        res.status(200).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
}