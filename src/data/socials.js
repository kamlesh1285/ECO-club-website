/**
 * Social media configuration.
 * ACTIVE: Instagram only.
 * The other platforms are pre-configured with enabled: false and empty url.
 * Any UI component MUST filter using `entry.enabled && entry.url`.
 */

export const socialConfig = {
  // Primary handle used for cards and labels
  // TODO: confirm handle. Document mentions @abes_ecoclub, another document notes @ecoclub_abes.
  instagramHandle: "@abes_ecoclub",
  instagramTagline: "Follow our live drives, campus clean-ups, workshops & eco tips",
  
  platforms: [
    {
      id: "instagram",
      label: "Instagram",
      handle: "@abes_ecoclub",
      url: "https://www.instagram.com/abes_ecoclub/",
      icon: "Instagram",
      enabled: true,
      description: "Follow our drives, events, and eco tips"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      handle: "",
      url: "", // Pre-configured: fill URL and set enabled: true when launched
      icon: "Linkedin",
      enabled: false,
      description: "Professional updates, project showcases, and team milestones"
    },
    {
      id: "discord",
      label: "Discord",
      handle: "",
      url: "", // Pre-configured: fill URL and set enabled: true when launched
      icon: "MessageSquare",
      enabled: false,
      description: "Tech & Project developer community and environmental ideation"
    },
    {
      id: "linktree",
      label: "Linktree",
      handle: "",
      url: "", // Pre-configured: fill URL and set enabled: true when launched
      icon: "Share2",
      enabled: false,
      description: "All club links in one place"
    },
    {
      id: "whatsapp",
      label: "WhatsApp Community",
      handle: "",
      url: "", // Pre-configured: fill URL and set enabled: true when launched
      icon: "PhoneCall",
      enabled: false,
      description: "Official student announcement channel"
    }
  ]
};

// Helper to retrieve only active platforms
export const getActiveSocials = () => {
  return socialConfig.platforms.filter(p => p.enabled && p.url.trim().length > 0);
};
