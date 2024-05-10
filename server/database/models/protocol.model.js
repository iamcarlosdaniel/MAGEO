import mongoose from "mongoose";

const serviceRequirementSchema = new mongoose.Schema({
  item_number: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  observations: {
    type: String,
    required: true,
  },
});

const inaugurationDataSchema = new mongoose.Schema({
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
});

const closingDataSchema = new mongoose.Schema({
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
});

const protocolSchema = new mongoose.Schema({
  master_ceremonies: {
    type: String,
    required: true,
    trim: true,
  },
  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  service_requirements: [serviceRequirementSchema],
  inauguration_data: [inaugurationDataSchema],
  closing_data: [closingDataSchema],
});

export default mongoose.model("Protocol", protocolSchema);
