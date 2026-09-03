import React, { useEffect } from 'react';
import {
  FileText,
  Users,
  Heart,
  Check
} from 'lucide-react';

interface TermsPageProps {
  onNavigateHome: () => void;
  onNavigateToAuth: (mode: 'REGISTER' | 'LOGIN') => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({
  onNavigateHome,
  onNavigateToAuth
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const membershipRules = [
    {
      number: 1,
      title: 'Membership Eligibility',
      content:
        "Membership in Yegna Edir is open to anyone who wishes to join and agrees to follow the Edir's rules, contribution requirements and responsibilities. By becoming a member, an individual agrees to participate responsibly in the Edir community and fulfill all membership obligations."
    },
    {
      number: 2,
      title: 'One-Time Joining Fee',
      content:
        'Every new member must pay a one-time joining fee of 10,000 ETB. The joining fee is required to establish membership in Yegna Edir and is non-refundable, even if a member later chooses to leave the Edir.'
    },
    {
      number: 3,
      title: 'Monthly Contribution',
      content:
        'Every member must contribute 100 ETB per month. The monthly contribution is separate from the one-time joining fee and is required throughout the member\'s participation in the Edir.'
    },
    {
      number: 4,
      title: 'Payment Deadline',
      content:
        'Members are expected to pay their monthly contribution according to the payment schedule established by Yegna Edir.'
    },
    {
      number: 5,
      title: 'Late Payment and Penalty',
      content:
        'A member who fails to pay the required monthly contribution on time will be charged a 10 ETB penalty for each unpaid month. The member must settle the outstanding monthly contribution and applicable penalties.'
    },
    {
      number: 6,
      title: 'Temporary Loss of Eligibility',
      content:
        'A member who has unpaid monthly contributions will temporarily lose eligibility for financial assistance. Eligibility can be restored when the member fulfills the applicable outstanding membership contribution requirements, subject to the Edir\'s verification.'
    },
    {
      number: 7,
      title: 'Member Responsibilities',
      content:
        'Members are responsible for paying the 10,000 ETB joining fee, paying the 100 ETB monthly contribution, paying applicable late-payment penalties, providing accurate information during registration, keeping their membership information up to date, following the rules and decisions established by the Yegna Edir Committee, and respecting other members and participating responsibly in the Edir community.'
    },
    {
      number: 8,
      title: 'Leaving the Edir',
      content:
        'A member may voluntarily leave Yegna Edir at any time. However, the 10,000 ETB joining fee and previous monthly contributions are non-refundable when a member leaves the Edir.'
    },
    {
      number: 9,
      title: 'Changes to Membership Rules',
      content:
        'The Yegna Edir Committee may review and update these rules when necessary. Members should be informed of significant changes to membership fees, contributions, benefits, or responsibilities before such changes take effect.'
    },
    {
      number: 10,
      title: 'Acceptance of Membership Rules',
      content:
        'By registering for Yegna Edir, an individual confirms that they have read, understood and agreed to comply with these Membership Rules & Contributions.'
    }
  ];

  const financialRules = [
    {
      number: 1,
      title: 'Purpose',
      content:
        'Yegna Edir provides financial assistance to members and their families during specified circumstances involving death and funeral-related events. The purpose of this assistance is to provide financial and community support during times of loss.'
    },
    {
      number: 2,
      title: 'Death of a Member',
      content:
        'If a registered Yegna Edir member dies, the member\'s family will be eligible to receive 25,000 ETB. The assistance is intended to support the family with funeral and related expenses.'
    },
    {
      number: 3,
      title: "Death of a Member's Sibling",
      content:
        'If a member\'s sibling dies, the member will be eligible to receive 15,000 ETB. For the purpose of this rule, "sibling" generally refers to the member\'s brother or sister.'
    },
    {
      number: 4,
      title: 'Immediate Eligibility',
      content:
        'A newly registered member may qualify for financial assistance immediately after joining, provided that the member has fulfilled the applicable membership requirements and is in good standing. There is no minimum membership waiting period before a member can qualify.'
    },
    {
      number: 5,
      title: 'Eligible Events',
      content:
        'Financial assistance under these rules is provided for death and funeral-related circumstances. The Edir does not currently provide financial assistance for celebratory or happy events such as weddings, births, graduations, engagements, or other celebrations, unless the Committee officially introduces such benefits in the future.'
    },
    {
      number: 6,
      title: 'Eligibility and Membership Status',
      content:
        'A member must be in good standing to receive financial assistance. A member with unpaid monthly contributions will temporarily lose eligibility for financial assistance until the applicable outstanding contributions and penalties have been settled.'
    },
    {
      number: 7,
      title: 'Verification',
      content:
        'Before assistance is provided, the Yegna Edir Committee may request reasonable information or documentation necessary to verify the occurrence of the death, the identity of the deceased, and the deceased person\'s relationship to the member, where applicable. The information requested should be limited to what is reasonably necessary to verify the claim.'
    },
    {
      number: 8,
      title: 'Approval of Assistance',
      content:
        'All financial assistance requests must be reviewed and approved by the Yegna Edir Committee. The Committee is responsible for reviewing the member\'s eligibility, verifying the reported event, confirming the relationship between the member and the deceased person where applicable, confirming the applicable assistance amount, and authorizing the payment.'
    },
    {
      number: 9,
      title: 'Multiple Assistance Requests',
      content:
        'A member may receive financial assistance for more than one qualifying event during their membership, provided that each event independently meets the requirements of these rules.'
    },
    {
      number: 10,
      title: 'Non-Eligible Events',
      content:
        'Financial assistance will not be provided for events that do not fall within the approved categories described in these rules.'
    },
    {
      number: 11,
      title: 'Exceptional Circumstances',
      content:
        'If a situation arises that is not clearly addressed by these rules, the Yegna Edir Committee will review the circumstances and make a decision according to the principles and rules of the Edir.'
    },
    {
      number: 12,
      title: 'Changes to Financial Assistance Rules',
      content:
        'The Yegna Edir Committee may review and update assistance amounts, eligibility requirements, and other financial assistance rules when necessary. Members should be informed of significant changes before they take effect.'
    },
    {
      number: 13,
      title: 'Acceptance',
      content:
        'By registering for Yegna Edir, an individual confirms that they have read, understood and agreed to comply with these Financial Assistance Rules.'
    }
  ];

  const handleNavToSection = (sectionId: string) => {
    onNavigateHome();
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background text-[var(--foreground)] font-sans selection:bg-[var(--primary)] selection:text-white flex flex-col">
      {/* ================= 1. STICKY HEADER ================= */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Wordmark */}
          <div
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={onNavigateHome}
          >
            <img src="/logo.jpg" alt="YegnaEdir Logo" className="w-8 h-8 object-contain rounded-xl" />
            <span className="text-xl font-serif font-bold text-[var(--primary)] tracking-tight">
              YegnaEdir
            </span>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--foreground)]/80">
            <button
              onClick={onNavigateHome}
              className="hover:text-[var(--primary)] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavToSection('features')}
              className="hover:text-[var(--primary)] transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => handleNavToSection('how-it-works')}
              className="hover:text-[var(--primary)] transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavToSection('about')}
              className="hover:text-[var(--primary)] transition-colors cursor-pointer"
            >
              About Our Edir
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-[var(--primary)] font-semibold text-[var(--primary)] transition-colors cursor-pointer"
            >
              Terms
            </button>
          </nav>

          {/* Sign In Button */}
          <div>
            <button
              onClick={() => onNavigateToAuth('LOGIN')}
              className="text-sm font-medium rounded-[0.75rem] px-5 py-2.5 bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 shadow-sm transition-all cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* ================= 2. HERO HEADER (bg-secondary/40) ================= */}
      <section className="bg-secondary/40 border-b border-[var(--border)] pt-14 pb-12 sm:pt-16 sm:pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Scroll / Document Icon (bg-primary/10) */}
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-[var(--primary)] flex items-center justify-center mx-auto mb-5 shadow-xs">
            <FileText className="w-6 h-6 text-[var(--primary)]" strokeWidth={1.8} />
          </div>

          {/* Gold Eyebrow */}
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[var(--accent)] block mb-3">
            YEGNA EDIR
          </span>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[var(--primary)] leading-[1.2] tracking-tight mb-4">
            Membership & Financial Assistance Rules
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[var(--foreground)]/80 max-w-2xl mx-auto leading-relaxed font-normal">
            These rules guide how we join, contribute and support one another as members of Yegna Edir. Please read them carefully before registering.
          </p>
        </div>
      </section>

      {/* ================= 3. PART ONE: MEMBERSHIP RULES (on bg-background) ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-[var(--primary)] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.8} />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[var(--accent)] block">
                PART ONE
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[var(--primary)] leading-tight">
                Membership Rules & Contributions
              </h2>
            </div>
          </div>

          {/* Rules Cards List (bg-card) */}
          <div className="space-y-4">
            {membershipRules.map((rule) => (
              <div
                key={`membership-${rule.number}`}
                className="p-6 sm:p-7 rounded-2xl bg-card border border-[var(--border)] shadow-xs"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-[var(--primary)] font-bold text-sm flex items-center justify-center shrink-0">
                    {rule.number}
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-normal text-[var(--primary)]">
                    {rule.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-[15px] text-[var(--foreground)]/80 leading-relaxed font-normal pl-0 sm:pl-[46px]">
                  {rule.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. PART TWO: FINANCIAL ASSISTANCE RULES (bg-secondary/40) ================= */}
      <section className="bg-secondary/40 border-y border-[var(--border)] py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-[var(--primary)] flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.8} />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[var(--accent)] block">
                PART TWO
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[var(--primary)] leading-tight">
                Financial Assistance Rules
              </h2>
            </div>
          </div>

          {/* Rules Cards List (bg-card) */}
          <div className="space-y-4">
            {financialRules.map((rule) => (
              <div
                key={`financial-${rule.number}`}
                className="p-6 sm:p-7 rounded-2xl bg-card border border-[var(--border)] shadow-xs"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-[var(--primary)] font-bold text-sm flex items-center justify-center shrink-0">
                    {rule.number}
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-normal text-[var(--primary)]">
                    {rule.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-[15px] text-[var(--foreground)]/80 leading-relaxed font-normal pl-0 sm:pl-[46px]">
                  {rule.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. ACCEPTANCE OF THE RULES (on bg-background with bg-card) ================= */}
      <section className="py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-card border border-[var(--border)] p-8 sm:p-12 text-center shadow-xs">
            {/* Gold Checkmark Circle */}
            <div className="w-12 h-12 rounded-full border-2 border-[var(--accent)] text-[var(--accent)] flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6" strokeWidth={2.5} />
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[var(--primary)] mb-3">
              Acceptance of the Rules
            </h3>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-[var(--foreground)]/80 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
              By registering for Yegna Edir, you confirm that you have read, understood and agreed to comply with both the Membership Rules & Contributions and the Financial Assistance Rules.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigateToAuth('REGISTER')}
                className="w-full sm:w-auto rounded-xl px-7 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-medium hover:opacity-95 transition-all shadow-sm cursor-pointer"
              >
                Join the Edir
              </button>
              <button
                onClick={onNavigateHome}
                className="w-full sm:w-auto rounded-xl px-7 py-3 bg-[#ede5d4] text-[var(--primary)] text-sm font-medium hover:bg-[#e3d7bf] transition-all cursor-pointer"
              >
                Back to home
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. FOOTER (bg-secondary/40) ================= */}
      <footer className="bg-secondary/40 border-t border-[var(--border)] py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted-foreground)]">
          <div
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={onNavigateHome}
          >
            <img src="/logo.jpg" alt="Logo" className="w-8 h-8 rounded-xl object-contain shadow-xs" />
            <span className="font-serif font-bold text-[var(--primary)] text-xl tracking-tight">
              YegnaEdir
            </span>
          </div>

          <p className="text-center font-normal text-[var(--muted-foreground)]">
            &copy; 2026 YegnaEdir. Built for our neighborhood Edir community.
          </p>
        </div>
      </footer>
    </div>
  );
};
