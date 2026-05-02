import CounterModel from "../models/CounterModel.js";
import upcomingCounterModel from "../models/upcomingCounterModel.js";

export const newsCounter = async (req, res) => {
    try {
      const counter = await CounterModel.findOne();
      if (!counter) {
        // Keep API shape stable so admin dashboard can render on a fresh DB.
        return res.json({ count: 1 });
      } else {
        return res.json(counter);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  };

export const upcomingNewsCounter =  async (req, res) => {
    try {
      const counter = await upcomingCounterModel.findOne();
      if (!counter) {
        // Keep API shape stable so admin dashboard can render on a fresh DB.
        return res.json({ count: 1 });
      } else {
        return res.json(counter);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  };