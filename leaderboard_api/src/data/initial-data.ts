const initialData = [
  {
    userId: 1,
    userName: 'Alice',
    avatarUrl: 'https://example.com/avatar/1.png',
    killCount: 10,
  },
  {
    userId: 2,
    userName: 'Bob',
    avatarUrl: 'https://example.com/avatar/2.png',
    killCount: 5,
  },
  {
    userId: 3,
    userName: 'Charlie',
    avatarUrl: 'https://example.com/avatar/3.png',
    killCount: 8,
  },
  {
    userId: 4,
    userName: 'Diana',
    avatarUrl: 'https://example.com/avatar/4.png',
    killCount: 15,
  },
  {
    userId: 5,
    userName: 'Ethan',
    avatarUrl: 'https://example.com/avatar/5.png',
    killCount: 3,
  },
  {
    userId: 6,
    userName: 'Fiona',
    avatarUrl: 'https://example.com/avatar/6.png',
    killCount: 12,
  },
  {
    userId: 7,
    userName: 'George',
    avatarUrl: 'https://example.com/avatar/7.png',
    killCount: 25,
  },
  {
    userId: 8,
    userName: 'Hannah',
    avatarUrl: 'https://example.com/avatar/8.png',
    killCount: 9,
  },
  {
    userId: 9,
    userName: 'Ian',
    avatarUrl: 'https://example.com/avatar/9.png',
    killCount: 14,
  },
  {
    userId: 10,
    userName: 'Jack',
    avatarUrl: 'https://example.com/avatar/10.png',
    killCount: 22,
  },
  {
    userId: 11,
    userName: 'Kathy',
    avatarUrl: 'https://example.com/avatar/11.png',
    killCount: 18,
  },
  {
    userId: 12,
    userName: 'Leo',
    avatarUrl: 'https://example.com/avatar/12.png',
    killCount: 7,
  },
  {
    userId: 13,
    userName: 'Mia',
    avatarUrl: 'https://example.com/avatar/13.png',
    killCount: 11,
  },
  {
    userId: 14,
    userName: 'Noah',
    avatarUrl: 'https://example.com/avatar/14.png',
    killCount: 30,
  },
  {
    userId: 15,
    userName: 'Olivia',
    avatarUrl: 'https://example.com/avatar/15.png',
    killCount: 13,
  },
  {
    userId: 16,
    userName: 'Paul',
    avatarUrl: 'https://example.com/avatar/16.png',
    killCount: 20,
  },
  {
    userId: 17,
    userName: 'Quinn',
    avatarUrl: 'https://example.com/avatar/17.png',
    killCount: 6,
  },
  {
    userId: 18,
    userName: 'Rita',
    avatarUrl: 'https://example.com/avatar/18.png',
    killCount: 2,
  },
  {
    userId: 19,
    userName: 'Sam',
    avatarUrl: 'https://example.com/avatar/19.png',
    killCount: 19,
  },
  {
    userId: 20,
    userName: 'Tina',
    avatarUrl: 'https://example.com/avatar/20.png',
    killCount: 4,
  },
  {
    userId: 21,
    userName: 'Uma',
    avatarUrl: 'https://example.com/avatar/21.png',
    killCount: 17,
  },
  {
    userId: 22,
    userName: 'Victor',
    avatarUrl: 'https://example.com/avatar/22.png',
    killCount: 23,
  },
  {
    userId: 23,
    userName: 'Wendy',
    avatarUrl: 'https://example.com/avatar/23.png',
    killCount: 1,
  },
  {
    userId: 24,
    userName: 'Xander',
    avatarUrl: 'https://example.com/avatar/24.png',
    killCount: 29,
  },
  {
    userId: 25,
    userName: 'Yara',
    avatarUrl: 'https://example.com/avatar/25.png',
    killCount: 16,
  },
  {
    userId: 26,
    userName: 'Zack',
    avatarUrl: 'https://example.com/avatar/26.png',
    killCount: 10,
  },
  {
    userId: 27,
    userName: 'Anna',
    avatarUrl: 'https://example.com/avatar/27.png',
    killCount: 8,
  },
  {
    userId: 28,
    userName: 'Brian',
    avatarUrl: 'https://example.com/avatar/28.png',
    killCount: 14,
  },
  {
    userId: 29,
    userName: 'Clara',
    avatarUrl: 'https://example.com/avatar/29.png',
    killCount: 12,
  },
  {
    userId: 30,
    userName: 'Derek',
    avatarUrl: 'https://example.com/avatar/30.png',
    killCount: 7,
  },
  {
    userId: 31,
    userName: 'Eva',
    avatarUrl: 'https://example.com/avatar/31.png',
    killCount: 9,
  },
  {
    userId: 32,
    userName: 'Felix',
    avatarUrl: 'https://example.com/avatar/32.png',
    killCount: 3,
  },
  {
    userId: 33,
    userName: 'Gina',
    avatarUrl: 'https://example.com/avatar/33.png',
    killCount: 18,
  },
  {
    userId: 34,
    userName: 'Henry',
    avatarUrl: 'https://example.com/avatar/34.png',
    killCount: 20,
  },
  {
    userId: 35,
    userName: 'Isla',
    avatarUrl: 'https://example.com/avatar/35.png',
    killCount: 15,
  },
  {
    userId: 36,
    userName: 'Jake',
    avatarUrl: 'https://example.com/avatar/36.png',
    killCount: 6,
  },
  {
    userId: 37,
    userName: 'Luna',
    avatarUrl: 'https://example.com/avatar/37.png',
    killCount: 22,
  },
  {
    userId: 38,
    userName: 'Mike',
    avatarUrl: 'https://example.com/avatar/38.png',
    killCount: 5,
  },
  {
    userId: 39,
    userName: 'Nina',
    avatarUrl: 'https://example.com/avatar/39.png',
    killCount: 9,
  },
  {
    userId: 40,
    userName: 'Owen',
    avatarUrl: 'https://example.com/avatar/40.png',
    killCount: 11,
  },
  {
    userId: 41,
    userName: 'Pam',
    avatarUrl: 'https://example.com/avatar/41.png',
    killCount: 2,
  },
  {
    userId: 42,
    userName: 'Quincy',
    avatarUrl: 'https://example.com/avatar/42.png',
    killCount: 8,
  },
  {
    userId: 43,
    userName: 'Rachel',
    avatarUrl: 'https://example.com/avatar/43.png',
    killCount: 4,
  },
  {
    userId: 44,
    userName: 'Steve',
    avatarUrl: 'https://example.com/avatar/44.png',
    killCount: 19,
  },
  {
    userId: 45,
    userName: 'Tina',
    avatarUrl: 'https://example.com/avatar/45.png',
    killCount: 21,
  },
  {
    userId: 46,
    userName: 'Ulysses',
    avatarUrl: 'https://example.com/avatar/46.png',
    killCount: 17,
  },
  {
    userId: 47,
    userName: 'Vera',
    avatarUrl: 'https://example.com/avatar/47.png',
    killCount: 30,
  },
  {
    userId: 48,
    userName: 'Walter',
    avatarUrl: 'https://example.com/avatar/48.png',
    killCount: 13,
  },
  {
    userId: 49,
    userName: 'Xena',
    avatarUrl: 'https://example.com/avatar/49.png',
    killCount: 10,
  },
  {
    userId: 50,
    userName: 'Yusuf',
    avatarUrl: 'https://example.com/avatar/50.png',
    killCount: 14,
  },
] as const;

export { initialData };
