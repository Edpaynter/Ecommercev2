"use strict";

const mongoose = require("mongoose");
const Task = mongoose.model("Task");
const transporter = require("../../../config/transporter");
exports.list_all_tasks = (req, res) => {
  Task.find({}, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.create_a_task = (req, res) => {
  const new_task = new Task(req.body);
  new_task.save((err, task) => {
    if (err) res.send(err);
    res.json(task);
    console.log(task);
    transporter.sendMail({
      from: `${task.email} AllSides Email Delivery Service`, // sender address
      to: `${process.env.COMPANY_EMAIL}`, // list of receivers
      subject: `${task.name} has reached out for more information`, // Subject line
      text: `${task.subject}`, // plain text body
      html: `<h3>Contact Email: ${task.name}</h3><br><h4>Message:</h4><br>${task.status}`, // html body
    });
  });
};

exports.read_a_task = (req, res) => {
  Task.findById(req.params.taskId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.update_a_task = (req, res) => {
  Task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

exports.delete_a_task = (req, res) => {
  Task.remove(
    {
      _id: req.params.taskId,
    },
    (err, task) => {
      if (err) res.send(err);
      res.json({ message: "Task has been deleted" });
    }
  );
};
