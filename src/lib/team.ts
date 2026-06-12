/**
 * Team roster — names, roles and personality bios carried over from the
 * current /people/ page (the quirky bios stay, per the Our People deck).
 *
 * PHOTOS: currently hotlinked to the live WordPress media library so they
 * render immediately. BEFORE LAUNCH (the old wp-content/ URLs die at cutover):
 *   run  scripts/fetch-team-photos.sh  — it downloads each photo into
 *   public/images/team/ with a descriptive SEO filename and rewrites the
 *   URLs in this file to local paths.
 * TODO [ACTION]: replace with the new consistent team photography when the
 * half-day shoot happens (design system §3).
 */

const WP = 'https://onlineconsulting.com.au/wp-content/uploads';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  slug: string;
}

export const TEAM: TeamMember[] = [
  {
    name: 'Sam Crawford',
    role: 'Managing Director',
    bio: '‘Big Picture Dreamer’ — Sam’s favourite animal would have to be the seal: Fun-loving, slow and endearing on land — yet fast, sleek and graceful under water.',
    photo: `${WP}/2016/07/sam.png`,
    slug: 'sam-crawford',
  },
  {
    name: 'Wilma Amposta',
    role: 'General Manager',
    bio: '‘Superwoman’ — Wilma loves superheroes. While her girlfriends prefer romance films, Wilma will always choose ‘The Avengers’ over ‘Endless Love.’',
    photo: `${WP}/2016/11/wilma.jpg`,
    slug: 'wilma-amposta',
  },
  {
    name: 'Jackie Tuazon',
    role: 'Digital Marketing Manager',
    bio: '‘Carpe Diem’ — always ready to take on a new challenge, whatever time of day it is. Her motto: “Believe you can and you’re halfway there.”',
    photo: `${WP}/2018/02/jack.jpg`,
    slug: 'jackie-tuazon',
  },
  {
    name: 'Jeff Ernacio',
    role: 'Help Desk Manager',
    bio: '‘IT Guy’ — Jeff is someone you can depend on, responsible and very trustworthy. “Engineer” to his friends, he’s a Jack of all trades.',
    photo: `${WP}/2016/10/profilepic-jeff.jpg`,
    slug: 'jeff-ernacio',
  },
  {
    name: 'Vince Besavilla',
    role: 'Head of Front-End Development',
    bio: 'A self-described ‘tenacious learner’, always ready to tackle any challenge — and serving clients with ‘red carpet’ assistance.',
    photo: `${WP}/2020/02/profilepic-vince.jpg`,
    slug: 'vince-besavilla',
  },
  {
    name: 'Hannah Sheila Iway',
    role: 'SEO Specialist',
    bio: 'A decade in SEO and never stops learning — and a mummy blogger and brand influencer when she’s off the clock.',
    photo: `${WP}/2016/10/profilepic-hannah.jpg`,
    slug: 'hannah-sheila-iway',
  },
  {
    name: 'Jarrad Peters',
    role: 'Account Manager',
    bio: 'The jack rabbit of the team — always moving forward, never giving up til he’s got the right result.',
    photo: `${WP}/2016/11/profilepic-jarrad.jpg`,
    slug: 'jarrad-peters',
  },
  {
    name: 'Richard Hensley',
    role: 'Copywriter and Content Strategist',
    bio: 'Says what needs to be said in as few words as possible. His motto — one of the world’s shortest poems: “Me, we.”',
    photo: `${WP}/2016/11/profilepic-richard.jpg`,
    slug: 'richard-hensley',
  },
  {
    name: 'Thanh Le',
    role: 'Web Developer',
    bio: 'Has the patience to see the tiny details that create the perfect result. “The aeroplane takes off against the wind. Not with it!”',
    photo: `${WP}/2020/02/profilepic-thanh.jpg`,
    slug: 'thanh-le',
  },
];

/** Home page team teaser (deck §8: Sam · Wilma · Jeff). */
export const TEAM_TEASER = [TEAM[0], TEAM[1], TEAM[3]];

/** Wide team group photo from the old site (darkened banner treatment). */
export const TEAM_GROUP_PHOTO = `${WP}/2016/07/team-bg.jpg`;
