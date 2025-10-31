"use client";
import React from "react";
import Button from "./Buttons";
import { Briefcase, MapPin, Clock } from "lucide-react";

interface Job {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
}

interface JobOpeningsCardProps {
  jobOpenings: Job[];
  onApply: (job: { id: string; title: string }) => void;
}

const JobOpeningsCard: React.FC<JobOpeningsCardProps> = ({
  jobOpenings,
  onApply,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobOpenings.map((job) => (
        <div
          key={job.id}
          className="bg-[#0d0d0d] border border-gray-800 rounded-2xl p-6 hover:border-white/40 transition-all duration-300 shadow-lg"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white">
              {job.title}
            </h3>
            <span className="text-[11px] bg-gray-800 text-gray-300 px-2 py-0.5 rounded-md border border-gray-700">
              {job.department}
            </span>
          </div>

          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {job.description}
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-500 mb-5">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {job.type}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase size={14} /> ID: {job.id}
            </span>
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={() => onApply({ id: job.id, title: job.title })}
          >
            Apply Now
          </Button>
        </div>
      ))}
    </div>
  );
};

export default JobOpeningsCard;
