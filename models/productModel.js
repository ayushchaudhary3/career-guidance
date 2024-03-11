import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    prerequisite: {
      type: String,
      required: true,
    },
    coursename: {
      type: String,
      required: true,
    },
    exam: {
      type: String,
      required: true,
    },
    futurescope: {
      type: String,
      required: true,
    },
    recruiter1: {
      type: String,
      required: true,
    },
    recruiter2: {
      type: String,
      required: true,
    },
    recruiter3: {
      type: String,
      required: true,
    },
    course1: {
      type: String,
      required: true,
    },
    course2: {
      type: String,
      required: true,
    },
    course3: {
      type: String,
      required: true,
    },
    coursel1: {
      type: String,
      required: true,
    },
    coursel2: {
      type: String,
      required: true,
    },
    coursel3: {
      type: String,
      required: true,
    },
    oppor1: {
      type: String,
      required: true,
    },
    oppor2: {
      type: String,
      required: true,
    },
    oppor3: {
      type: String,
      required: true,
    },
    opporl1: {
      type: String,
      required: true,
    },
    opporl2: {
      type: String,
      required: true,
    },
    opporl3: {
      type: String,
      required: true,
    },
    job1: {
      type: String,
      required: true,
    },
    job2: {
      type: String,
      required: true,
    },
    job3: {
      type: String,
      required: true,
    },
    jobl1: {
      type: String,
      required: true,
    },
    jobl2: {
      type: String,
      required: true,
    },
    jobl3: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
