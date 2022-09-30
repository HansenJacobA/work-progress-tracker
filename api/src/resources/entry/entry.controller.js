import pkg from '../../db/index.js';
export const { Entry } = pkg;

export const findMany = async (req, res) => {
    try {
        const doc = await Entry
            .findMany({ selectedTopic: req.params.name });

        if (!doc) {
            return res.status(400).end();
        };

        res.status(200).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    };
};

export const create = async (req, res) => {
    try {
        const doc = await Entry
            .create(req.body);

        if (!doc) {
            return res.status(400).end();
        };

        res.status(200).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    };
};