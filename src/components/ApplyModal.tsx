"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Button from "./Buttons";

interface ApplyModalProps {
  open: boolean;
  onClose: () => void;
  defaultApplyingFor?: string;
  defaultJobId?: string;
}

const ApplyModal: React.FC<ApplyModalProps> = ({
  open,
  onClose,
  defaultApplyingFor = "",
  defaultJobId = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    applyingFor: defaultApplyingFor,
    jobId: defaultJobId,
    resume: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application Submitted ✅", formData);
    alert("Application Submitted Successfully!");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6 sm:p-8 w-full max-w-lg text-white relative shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-semibold mb-4">
              Apply for a Position
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:border-white/60"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:border-white/60"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Applying For</label>
                <input
                  type="text"
                  name="applyingFor"
                  value={formData.applyingFor}
                  onChange={handleChange}
                  placeholder="e.g., Frontend Developer"
                  className="w-full mt-1 p-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:border-white/60"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Job ID (if any)</label>
                <input
                  type="text"
                  name="jobId"
                  value={formData.jobId}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="w-full mt-1 p-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:border-white/60"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Upload Resume</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFile}
                  className="w-full mt-1 p-2 rounded-md bg-gray-900 border border-gray-700 text-white focus:border-white/60"
                />
              </div>

              <div className="flex justify-end mt-6">
                <Button variant="primary" type="submit">
                  Submit Application
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;
