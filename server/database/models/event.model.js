import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    //modelo del formato para eventos
    request_date: {
      type: Date,
      default: Date.now,
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
    schedules: {
      type: String,
      required: true,
      trim: true,
    },
    registration_link: {
      type: String,
      required: true,
      trim: true,
    },
    attendance_control: {
      type: String,
      required: true,
      trim: true,
    },
    priority: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Event", eventSchema);
