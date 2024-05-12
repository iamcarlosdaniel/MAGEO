import mongoose from "mongoose";

const requirementAndServicesSchema = new mongoose.Schema(
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

const participantSchema = new mongoose.Schema(
  {
    participant_number: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    academic_degree: {
      type: String,
      required: true,
    },
    company_institution: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    observations: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const masterOfCeremoniesSchema = new mongoose.Schema(
  {
    status: {
      type: Boolean,
      required: true,
    },
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
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

const protocolSchema = new mongoose.Schema({
  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  master_of_ceremonies: {
    type: masterOfCeremoniesSchema,
  },
  service_requirements: [requirementAndServicesSchema],
  inauguration_data: [participantSchema],
  closing_data: [participantSchema],
});

export default mongoose.model("Protocol", protocolSchema);
