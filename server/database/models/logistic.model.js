import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema(
  {
    item_number: {
      type: Number,
      required: true,
      trim: true,
    },
    supplier: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    unit: {
      type: Number,
      required: true,
      trm: true,
    },
    unit_price: {
      type: Number,
      trim: true,
    },
    observations: {
      type: String,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const accommodationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    phone: {
      type: Number,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const responsiblePersonSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const speakerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    arrival_date_and_time: {
      type: Date,
      required: true,
      trim: true,
    },
    return_date_and_time: {
      type: Date,
      required: true,
      trim: true,
    },
    accommodation: {
      type: accommodationSchema,
    },
    responsible_person: {
      type: responsiblePersonSchema,
    },
  },
  {
    _id: false,
  }
);

const logisticSchema = new mongoose.Schema({
  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  furniture_services: [
    {
      type: itemsSchema,
    },
  ],
  food_services: [
    {
      type: itemsSchema,
    },
  ],
  transport_services: [
    {
      type: itemsSchema,
    },
  ],
  support_material: [
    {
      type: itemsSchema,
    },
  ],
  speakers: [
    {
      type: speakerSchema,
    },
  ],
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
});

export default mongoose.model("Logistic", logisticSchema);
