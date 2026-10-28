/**
 * Events Data: Ongoing, Upcoming (with verified future dates), and Past.
 * NOTE: All events are explicitly SAMPLE DATA for demonstration.
 */

export const eventsData = [
  // UPCOMING EVENTS (Future dates relative to current time)
  {
    id: "evt-up-1",
    title: "ABES Green Code Hackathon 2026",
    status: "upcoming",
    date: "November 18, 2026",
    isoDate: "2026-11-18T09:30:00+05:30",
    time: "09:30 AM – 05:30 PM",
    venue: "Main Auditorium & Tech Labs, Campus 1",
    description: "Sample Event: 24-hour sprint developing hardware & software prototypes targeting climate resilience, renewable energy optimization, and smart campus waste management.",
    tags: ["Hackathon", "Tech & Project", "Coding"],
    spotsRemaining: 45,
    isSample: true,
    isFeatured: true
  },
  {
    id: "evt-up-2",
    title: "Winter Campus Plantation Drive: Phase III",
    status: "upcoming",
    date: "December 08, 2026",
    isoDate: "2026-12-08T10:00:00+05:30",
    time: "10:00 AM – 01:00 PM",
    venue: "North Sports Grounds & Perimeter Green Belt",
    description: "Sample Event: Hands-on student plantation drive targeting 300+ native saplings with geotagging and compost mulching.",
    tags: ["Plantation", "Drive", "Hands-on"],
    spotsRemaining: 80,
    isSample: true,
    isFeatured: false
  },
  {
    id: "evt-up-3",
    title: "National Clean Air & IoT Summit",
    status: "upcoming",
    date: "January 14, 2027",
    isoDate: "2027-01-14T11:00:00+05:30",
    time: "11:00 AM – 03:00 PM",
    venue: "Seminar Hall 2, B-Block",
    description: "Sample Event: Guest lectures by environmental technologists discussing low-cost particulate telemetry and industrial carbon capture.",
    tags: ["Seminar", "Tech & Project", "Awareness"],
    spotsRemaining: 120,
    isSample: true,
    isFeatured: false
  },

  // ONGOING EVENTS
  {
    id: "evt-on-1",
    title: "Campus E-Waste Collection Week",
    status: "ongoing",
    date: "Active This Week",
    isoDate: "2026-10-31T17:00:00+05:30",
    time: "09:00 AM – 05:00 PM Daily",
    venue: "Student Activity Center (SAC) Drop-Box",
    description: "Sample Event: Drop off non-functional charging cords, PCB components, depleted batteries, and old smartphones for certified recycling.",
    tags: ["Drives", "E-Waste", "Recycling"],
    spotsRemaining: "Open to all",
    isSample: true,
    isFeatured: true
  },

  // PAST EVENTS
  {
    id: "evt-past-1",
    title: "World Earth Day 2026 Campus Symposium",
    status: "past",
    date: "April 22, 2026",
    isoDate: "2026-04-22T10:00:00+05:30",
    time: "10:00 AM – 04:00 PM",
    venue: "College Amphitheatre",
    description: "Sample Event: Poster presentations, eco-quiz, and keynotes exploring engineering solutions for urban smog.",
    tags: ["Symposium", "Awareness", "Past"],
    spotsRemaining: 0,
    isSample: true,
    isFeatured: false
  },
  {
    id: "evt-past-2",
    title: "Plastic-Free Campus Pledge & Rally",
    status: "past",
    date: "February 12, 2026",
    isoDate: "2026-02-12T11:00:00+05:30",
    time: "11:00 AM – 01:00 PM",
    venue: "Central Lawns, ABES EC",
    description: "Sample Event: Awareness rally promoting cloth bags and paper alternatives across student canteens.",
    tags: ["Awareness", "Drives", "Past"],
    spotsRemaining: 0,
    isSample: true,
    isFeatured: false
  }
];

export const getNextUpcomingEvent = () => {
  const upcoming = eventsData
    .filter(e => e.status === "upcoming")
    .sort((a, b) => new Date(a.isoDate) - new Date(b.isoDate));
  return upcoming[0] || null;
};
