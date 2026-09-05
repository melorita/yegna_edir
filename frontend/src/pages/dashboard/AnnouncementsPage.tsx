import React, { useState } from 'react';
import { Megaphone, Coins, ClipboardList, CalendarCheck, User, MessageCircle, ThumbsUp, Heart, Send } from 'lucide-react';

export const AnnouncementsPage: React.FC = () => {
  const [showComments, setShowComments] = useState<{ [key: string]: boolean }>({});
  const [newComment, setNewComment] = useState<{ [key: string]: string }>({});

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-[var(--primary)] mb-1">Announcements</h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Important updates and notices from the Edir committee.
        </p>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {/* Announcement 1 - Monthly Meeting */}
        <div className="rounded-3xl bg-card border border-[var(--border)] overflow-hidden">
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                <Megaphone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-serif font-semibold text-[var(--primary)] mb-2">
                  Monthly Meeting – September 10
                </h3>
                <p className="text-sm text-[var(--foreground)] leading-relaxed mb-4">
                  Dear members, our monthly Edir meeting will take place on <strong>September 10 at 3:00 PM</strong> at Kebele 08 community hall. 
                  Please come prepared to discuss the upcoming budget and approve new member applications. Your presence is important for decision-making.
                </p>
                <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                  <span className="flex items-center gap-1">
                    <CalendarCheck className="w-3.5 h-3.5" />
                    September 4, 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    Posted by: Yegna Edir Committee
                  </span>
                </div>
              </div>
            </div>

            {/* Reactions Bar */}
            <div className="flex items-center gap-6 pt-4 border-t border-[var(--border)]">
              <button className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span>12</span>
              </button>
              <button className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-rose-600 transition-colors">
                <Heart className="w-4 h-4" />
                <span>8</span>
              </button>
              <button className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-amber-600 transition-colors">
                <span className="text-base">🙏</span>
                <span>5</span>
              </button>
              <button 
                onClick={() => setShowComments({ ...showComments, 'ann1': !showComments['ann1'] })}
                className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors ml-auto"
              >
                <MessageCircle className="w-4 h-4" />
                <span>3 comments</span>
              </button>
            </div>
          </div>

          {/* Comments Section */}
          {showComments['ann1'] && (
            <div className="bg-[#f5f0e8] p-6 border-t border-[var(--border)]">
              <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4">Comments</h4>
              
              {/* Comment 1 */}
              <div className="mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 text-[var(--primary)] flex items-center justify-center text-xs font-bold flex-shrink-0">
                    AB
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-[var(--foreground)]">Abebe Bekele</span>
                      <span className="text-xs text-[var(--muted-foreground)]">2 hours ago</span>
                    </div>
                    <p className="text-sm text-[var(--foreground)]">
                      Thank you for the notice. I will be there on time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 text-[var(--primary)] flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ST
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-[var(--foreground)]">Sara Tadesse</span>
                      <span className="text-xs text-[var(--muted-foreground)]">5 hours ago</span>
                    </div>
                    <p className="text-sm text-[var(--foreground)]">
                      Can we also discuss the maintenance of the tent inventory?
                    </p>
                  </div>
                </div>
              </div>

              {/* Add Comment */}
              <div className="mt-4 pt-4 border-t border-[var(--border)]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#e8e5df] text-[var(--primary)] flex items-center justify-center text-xs font-bold flex-shrink-0">
                    MT
                  </div>
                  <div className="flex-1 flex gap-2">
                    <input
                      type="text"
                      value={newComment['ann1'] || ''}
                      onChange={(e) => setNewComment({ ...newComment, 'ann1': e.target.value })}
                      placeholder="Add a comment..."
                      className="flex-1 px-4 py-2 rounded-xl border border-[var(--border)] bg-white text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                    <button 
                      className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white hover:opacity-90 transition-all flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Announcement 2 - Contribution Reminder */}
        <div className="rounded-3xl bg-card border border-[var(--border)] overflow-hidden">
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                <Coins className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-serif font-semibold text-[var(--primary)] mb-2">
                  Monthly Contribution Reminder – September
                </h3>
                <p className="text-sm text-[var(--foreground)] leading-relaxed mb-4">
                  Dear members, this is a friendly reminder that the monthly contribution of <strong>100 ETB is due by September 10</strong>. 
                  Please make your payment on time to avoid late penalties. You can pay through the mobile banking or in person at the meeting.
                </p>
                <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                  <span className="flex items-center gap-1">
                    <CalendarCheck className="w-3.5 h-3.5" />
                    September 1, 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    Posted by: Yegna Edir Committee
                  </span>
                </div>
              </div>
            </div>

            {/* Reactions Bar */}
            <div className="flex items-center gap-6 pt-4 border-t border-[var(--border)]">
              <button className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span>18</span>
              </button>
              <button className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-rose-600 transition-colors">
                <Heart className="w-4 h-4" />
                <span>6</span>
              </button>
              <button className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-amber-600 transition-colors">
                <span className="text-base">🙏</span>
                <span>10</span>
              </button>
              <button 
                onClick={() => setShowComments({ ...showComments, 'ann2': !showComments['ann2'] })}
                className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors ml-auto"
              >
                <MessageCircle className="w-4 h-4" />
                <span>1 comment</span>
              </button>
            </div>
          </div>

          {/* Comments Section */}
          {showComments['ann2'] && (
            <div className="bg-[#f5f0e8] p-6 border-t border-[var(--border)]">
              <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4">Comments</h4>
              
              {/* Comment 1 */}
              <div className="mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 text-[var(--primary)] flex items-center justify-center text-xs font-bold flex-shrink-0">
                    DM
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-[var(--foreground)]">Dawit Mulugeta</span>
                      <span className="text-xs text-[var(--muted-foreground)]">1 day ago</span>
                    </div>
                    <p className="text-sm text-[var(--foreground)]">
                      Understood. Will pay before the deadline.
                    </p>
                  </div>
                </div>
              </div>

              {/* Add Comment */}
              <div className="mt-4 pt-4 border-t border-[var(--border)]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#e8e5df] text-[var(--primary)] flex items-center justify-center text-xs font-bold flex-shrink-0">
                    MT
                  </div>
                  <div className="flex-1 flex gap-2">
                    <input
                      type="text"
                      value={newComment['ann2'] || ''}
                      onChange={(e) => setNewComment({ ...newComment, 'ann2': e.target.value })}
                      placeholder="Add a comment..."
                      className="flex-1 px-4 py-2 rounded-xl border border-[var(--border)] bg-white text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                    <button 
                      className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white hover:opacity-90 transition-all flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Announcement 3 - Rule Change */}
        <div className="rounded-3xl bg-card border border-[var(--border)] overflow-hidden">
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.36_0.083_155_/_0.1)] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                <ClipboardList className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-serif font-semibold text-[var(--primary)] mb-2">
                  Updated Attendance Policy
                </h3>
                <p className="text-sm text-[var(--foreground)] leading-relaxed mb-4">
                  The committee has approved changes to the attendance policy. Members who miss more than 3 gatherings 
                  in a year without valid excuse will now face a penalty of 50 ETB per absence. This policy takes effect 
                  from October 1, 2026. Please review the full policy document in the Edir Rules section.
                </p>
                <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                  <span className="flex items-center gap-1">
                    <CalendarCheck className="w-3.5 h-3.5" />
                    August 28, 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    Posted by: Yegna Edir Committee
                  </span>
                </div>
              </div>
            </div>

            {/* Reactions Bar */}
            <div className="flex items-center gap-6 pt-4 border-t border-[var(--border)]">
              <button className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span>25</span>
              </button>
              <button className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-rose-600 transition-colors">
                <Heart className="w-4 h-4" />
                <span>4</span>
              </button>
              <button className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-amber-600 transition-colors">
                <span className="text-base">🙏</span>
                <span>15</span>
              </button>
              <button 
                onClick={() => setShowComments({ ...showComments, 'ann3': !showComments['ann3'] })}
                className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors ml-auto"
              >
                <MessageCircle className="w-4 h-4" />
                <span>7 comments</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
