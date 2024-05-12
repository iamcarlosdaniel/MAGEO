import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema(
  {
    place: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    time: {
      type: Date,
      required: true,
      trim: true,
    },
    format: {
      type: String,
      enum: ["In person", "Virtual"],
      required: true,
      trim: true,
    },
    event_type: {
      type: String,
      enum: [
        "Talks",
        "Contest",
        "Seminar",
        "Symposium",
        "Workshop",
        "Conference",
        "Fair",
        "Signing of Agreement",
        "Inauguration",
        "Exhibition",
        "Cultural Activity",
        "Others",
      ],
      required: true,
      trim: true,
    },
    coordination: {
      type: String,
      required: true,
      trim: true,
    },
    spectators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Spectator",
        required: true,
      },
    ],
    activity_objective: {
      type: String,
      required: true,
      trim: true,
    },
    scope: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    links_to_visual_material: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const eventSchema = new mongoose.Schema(
  {
    request_date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    campus: {
      type: String,
      enum: [
        "Santa Cruz",
        "La Paz",
        "Cochabamba",
        "Sucre",
        "Trinidad",
        "National",
      ],
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    event_name: {
      type: String,
      required: true,
      trim: true,
    },
    event_description: {
      type: String,
      required: true,
      trim: true,
    },
    area: {
      type: String,
      required: true,
      trim: true,
    },
    schedules: [
      {
        type: scheduleSchema,
        required: true,
      },
    ],
    registration_link: {
      type: String,
      required: true,
      trim: true,
    },
    attendance_control: {
      type: Boolean,
      enum: [true, false],
      required: true,
      trim: true,
    },
    priority: {
      type: String,
      default: "null",
      required: true,
      trim: true,
    },
    state: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
      required: true,
    },
    observations: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Event", eventSchema);
