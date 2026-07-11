import {
  Github, Linkedin, Youtube, Mail, Phone, Send,
  Instagram, PlayCircle, Globe, Slack, DollarSign,
} from 'lucide-react';

/**
 * Social platform directory.
 * `pending: true` = URL/handle not yet supplied — excluded from the visible
 * bar automatically by SocialBar.jsx until real data is added here.
 *
 * Confirmed URLs sourced directly from the brief. Do NOT fabricate handles
 * for pending entries — replace `url: null` with the real link when available.
 */
export const socialLinks = [
  {
    key: 'github',
    label: 'GitHub',
    icon: Github,
    url: 'https://github.com/Dev-moe-kyawaung/',
    pending: false,
  },
  {
    key: 'gravatar',
    label: 'Gravatar',
    icon: Globe,
    url: 'https://gravatar.com/moekyawaung13721',
    pending: false,
  },
  {
    key: 'email',
    label: 'Email',
    icon: Mail,
    url: 'mailto:moekyawaung@engineer.com',
    pending: false,
  },
  {
    key: 'phone',
    label: 'Phone',
    icon: Phone,
    url: 'tel:+959889000889',
    pending: false,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/moe-kyaw-aung-2653093a1',
    pending: false,
  },
  {
    key: 'youtube',
    label: 'YouTube',
    icon: Youtube,
    url: 'https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG',
    pending: false,
  },
  {
    key: 'vimeo',
    label: 'Vimeo',
    icon: PlayCircle,
    url: 'https://vimeo.com/user252414232',
    pending: false,
  },
  {
    key: 'bluesky',
    label: 'Bluesky',
    icon: Globe,
    url: 'https://bsky.app/profile/moekyawaung96.bsky.social',
    pending: false,
  },
  {
    key: 'tumblr',
    label: 'Tumblr',
    icon: Globe,
    url: 'https://www.tumblr.com/moekyawaung',
    pending: false,
  },
  {
    key: 'flickr',
    label: 'Flickr',
    icon: Globe,
    url: 'https://www.flickr.com/people/204037451@N06',
    pending: false,
  },
  {
    key: 'slack',
    label: 'Slack',
    icon: Slack,
    url: 'https://moekyawaung.slack.com/',
    pending: false,
  },
  {
    key: 'paypal',
    label: 'PayPal',
    icon: DollarSign,
    url: 'https://www.paypal.com/paypalme/my/profile',
    pending: false,
  },
  {
    key: 'strikingly',
    label: 'Strikingly',
    icon: Globe,
    url: 'http://moekyawaung2026.strikingly.com',
    pending: false,
  },

  // ── Pending: platform mentioned in requirements, but no real URL supplied ──
  { key: 'telegram', label: 'Telegram', icon: Send, url: null, pending: true },
  { key: 'instagram', label: 'Instagram', icon: Instagram, url: null, pending: true },
  { key: 'playstore', label: 'Play Store', icon: PlayCircle, url: null, pending: true },
  { key: 'tiktok', label: 'TikTok', icon: Globe, url: null, pending: true },
  { key: 'reddit', label: 'Reddit', icon: Globe, url: null, pending: true },
  { key: 'pinterest', label: 'Pinterest', icon: Globe, url: null, pending: true },
  { key: 'twitch', label: 'Twitch', icon: Globe, url: null, pending: true },
  { key: 'wordpress', label: 'WordPress', icon: Globe, url: null, pending: true },
];

// Only platforms with confirmed, real URLs render in the live icon bar
export const activeSocialLinks = socialLinks.filter((s) => !s.pending);
export const pendingSocialLinks = socialLinks.filter((s) => s.pending);
