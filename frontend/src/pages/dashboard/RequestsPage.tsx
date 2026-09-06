import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CreditCard, Home, ChevronDown } from 'lucide-react';

export const RequestsPage: React.FC = () => {
  const location = useLocation();
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requestType, setRequestType] = useState('');
  const [requestDetails, setRequestDetails] = useState('');
  const [showRequestTypeDropdown, setShowRequestTypeDropdown] = useState(false);

  // Automatically open the form if navigated from "Submit a request" button
  useEffect(() => {
    if (location.state?.openForm) {
      setShowRequestForm(true);
    }
  }, [location.state]);

  const handleSubmitRequest = () => {
    // Submit request logic here
    console.log('Request submitted:', { requestType, requestDetails });
    // Reset form
    setRequestType('');
    setRequestDetails('');
    setShowRequestForm(false);
  };

  const handleCancelRequest = () => {
    setRequestType('');
    setRequestDetails('');
    setShowRequestForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-1">Requests</h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Assistance and support requests you have sent to the committee.
        </p>
      </div>

      {/* Submit a new request */}
      <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-serif font-semibold text-[var(--foreground)]">Submit a new request</h3>
          <button 
            onClick={() => setShowRequestForm(!showRequestForm)}
            className="px-5 py-2.5 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all"
          >
            {showRequestForm ? 'Cancel' : 'New request'}
          </button>
        </div>

        {/* Request Form - Shows when New request is clicked */}
        {showRequestForm ? (
          <div className="space-y-5">
            {/* Request Type Dropdown - Custom */}
            <div className="relative">
              <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                Request Type
              </label>
              <button
                type="button"
                onClick={() => setShowRequestTypeDropdown(!showRequestTypeDropdown)}
                className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent text-left flex items-center justify-between"
              >
                <span className={!requestType ? 'text-[var(--muted-foreground)]' : ''}>
                  {requestType === 'financial' ? 'Financial assistance' : 
                   requestType === 'tent' ? 'Tent & equipment' : 
                   requestType === 'other' ? 'Other' : 
                   'Select request type...'}
                </span>
                <ChevronDown className={`w-5 h-5 text-[var(--muted-foreground)] transition-transform ${showRequestTypeDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {showRequestTypeDropdown && (
                <div className="absolute z-10 w-full mt-1 rounded-xl border border-[var(--border)] bg-[var(--background)] shadow-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => {
                      setRequestType('');
                      setShowRequestTypeDropdown(false);
                    }}
                    className="w-full px-4 py-3 text-left text-[var(--muted-foreground)] hover:bg-[#ede5d4] transition-colors"
                  >
                    Select request type...
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRequestType('financial');
                      setShowRequestTypeDropdown(false);
                    }}
                    className="w-full px-4 py-3 text-left text-[var(--foreground)] hover:bg-[#ede5d4] transition-colors"
                  >
                    Financial assistance
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRequestType('tent');
                      setShowRequestTypeDropdown(false);
                    }}
                    className="w-full px-4 py-3 text-left text-[var(--foreground)] hover:bg-[#ede5d4] transition-colors"
                  >
                    Tent & equipment
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRequestType('other');
                      setShowRequestTypeDropdown(false);
                    }}
                    className="w-full px-4 py-3 text-left text-[var(--foreground)] hover:bg-[#ede5d4] transition-colors"
                  >
                    Other
                  </button>
                </div>
              )}
            </div>

            {/* Request Details */}
            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                Request Details
              </label>
              <textarea
                value={requestDetails}
                onChange={(e) => setRequestDetails(e.target.value)}
                placeholder="Please describe what you need and provide any relevant details (e.g., number of items, amount needed, reason for request)..."
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent resize-none"
              />
              <p className="text-xs text-[var(--muted-foreground)] mt-2">
                Be specific about quantities, dates, or amounts to help the committee process your request faster.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleSubmitRequest}
                disabled={!requestType || !requestDetails.trim()}
                className="px-6 py-3 rounded-xl bg-[var(--primary)] text-white text-sm font-semibold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Request
              </button>
              <button
                onClick={handleCancelRequest}
                className="px-6 py-3 rounded-xl bg-secondary/40 text-[var(--foreground)] text-sm font-semibold hover:bg-secondary/60 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          // Request Type Cards - Shows by default
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Financial assistance */}
            <button 
              onClick={() => {
                setShowRequestForm(true);
                setRequestType('financial');
              }}
              className="p-6 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CreditCard className="w-5 h-5" />
              </div>
              <h4 className="font-medium text-[var(--foreground)] text-sm">Financial assistance</h4>
            </button>

            {/* Tent & equipment */}
            <button 
              onClick={() => {
                setShowRequestForm(true);
                setRequestType('tent');
              }}
              className="p-6 rounded-2xl bg-[#f5f0e8] border border-[var(--border)] hover:bg-[#ebe5da] transition-all text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Home className="w-5 h-5" />
              </div>
              <h4 className="font-medium text-[var(--foreground)] text-sm">Tent & equipment</h4>
            </button>
          </div>
        )}
      </div>

      {/* My requests */}
      <div className="rounded-3xl bg-card border border-[var(--border)] p-6">
        <h3 className="text-lg font-serif font-semibold text-[var(--foreground)] mb-1">My requests</h3>
        <p className="text-sm text-[var(--muted-foreground)] mb-6">
          Track assistance and support requests you sent to the committee.
        </p>

        <div className="space-y-4">
          {/* Request 1 - Under committee review */}
          <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-[var(--foreground)] text-base mb-1">
                  Funeral assistance — sibling
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">REQ-118 • submitted 21 Aug 2026</p>
              </div>
              <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Under committee review
              </span>
            </div>
            <p className="text-sm text-[var(--foreground)]">
              Requested financial assistance of 5,000 ETB following the passing of your brother. The committee is verifying documents.
            </p>
          </div>

          {/* Request 2 - Approved */}
          <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-[var(--foreground)] text-base mb-1">
                  Tent & chairs request
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">REQ-097 • submitted 02 Jun 2026</p>
              </div>
              <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Approved
              </span>
            </div>
            <p className="text-sm text-[var(--foreground)]">
              Approved: 2 tents and 50 chairs reserved from the Edir inventory for your family event on 15 June 2026.
            </p>
          </div>

          {/* Request 3 - Completed */}
          <div className="p-5 rounded-2xl bg-[#f5f0e8] border border-[var(--border)]">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-[var(--foreground)] text-base mb-1">
                  Membership information update
                </h4>
                <p className="text-xs text-[var(--muted-foreground)]">REQ-081 • submitted 11 Apr 2026</p>
              </div>
              <span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                Completed
              </span>
            </div>
            <p className="text-sm text-[var(--foreground)]">
              Your household address was updated to Kebele 08, House 214 as requested.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
