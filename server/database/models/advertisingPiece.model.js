import mongoose from "mongoose";

const advertisingPieceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    request_date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
    area: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    spectators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Spectator",
        required: true,
      },
    ],
    goals: {
      type: String,
      required: true,
    },
    scope: {
      type: String,
      enum: ["regional", "national"],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    visual_references: {
      type: String,
    },
    registrations_links: {
      type: String,
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
  { collection: "advertising_pieces" },
  {
    timestamps: true,
  }
);

export default mongoose.model("AdvertisingPiece", advertisingPieceSchema);
