"use client";
import React, { useState } from "react";
import Head from "next/head";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Buttons";
import ApplyModal from "@/components/ApplyModal";
import JobOpeningsCard from "@/components/JobOpeningsCard";
import { jobOpenings } from "../../utilities/jobOpening";

const CareerPage: React.FC = () => {
  const [applyOpen, setApplyOpen] = useState(false);
  const [prefillRole, setPrefillRole] = useState<string>("");
  const [prefillJobId, setPrefillJobId] = useState<string>("");

  const openApply = (role?: string, jobId?: string) => {
    setPrefillRole(role ?? "");
    setPrefillJobId(jobId ?? "");
    setApplyOpen(true);
  };

  return (
    <>
      <Head>
        <title>Join Our Team | Careers at Intelyhood</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Intelyhood. Apply now and join our innovative tech team!"
        />
      </Head>

      <div className="pt-26 bg-black min-h-screen text-white">
        {/* Banner */}
        <div className="bg-[#111111] py-3 text-sm font-semibold text-center rounded mb-10 mx-4 sm:mx-auto max-w-5xl border border-gray-800 shadow-md tracking-wide uppercase text-gray-200">
          🚀 We’re Hiring Interns & Junior Developers — Join Our AI, ML, Frontend & Backend Teams!
        </div>

        <div className="container mx-auto px-5 py-6 max-w-screen-2xl">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-3 text-white">
              Careers at <span className="text-gray-400">Intelyhood</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Be part of our mission to build the future of intelligence.  
              Apply today and let’s create something extraordinary together.
            </p>
          </div>

          {/* CTA */}
          <div className="w-full max-w-3xl mx-auto mb-10 bg-[#0d0d0d] border border-gray-800 p-6 rounded-2xl backdrop-blur-sm shadow-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Didn’t find a matching role?
                </h3>
                <p className="text-gray-500 text-sm">
                  Still apply — we’ll keep you in mind for future openings.
                </p>
              </div>
              <Button
                onClick={() => openApply()}
                className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-lg text-sm transition-all duration-300 font-semibold"
              >
                Apply Anyway
              </Button>
            </div>
          </div>

          {/* Job Openings */}
          <div className="grid grid-cols-1 gap-6">
            <div className="lg:col-span-3">
              <JobOpeningsCard
                jobOpenings={jobOpenings}
                onApply={(job: { id: string; title: string }) =>
                  openApply(`${job.title} - ${job.id}`, job.id)
                }// (optional if you want to handle dark/light logic inside component)
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        <ApplyModal
          open={applyOpen}
          onClose={() => setApplyOpen(false)}
          defaultApplyingFor={prefillRole}
          defaultJobId={prefillJobId}
        />
      </div>
    </>
  );
};

export default CareerPage;
