const TRACKS = [
  {
    title: 'Introduction',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 42.864,
  },
  {
    title: 'Preface',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 99.72,
  },
  {
    title: 'My Parents and Early Life',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 2203.68,
  },
  {
    title: 'My Mothers Death and the Mystic Amulet',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1197.024,
  },
  {
    title: 'The Saint With Two Bodies',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1118.616,
  },
  {
    title: 'My Interrupted Flight Toward the Himalayas',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 2420.568,
  },
  {
    title: 'A Perfume Saint Displays His Wonders',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1457.112,
  },
  {
    title: 'The Tiger Swami',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1920.36,
  },
  {
    title: 'The Levitating Saint',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1006.2,
  },
  {
    title: 'Indias Great Scientist J. C. Bose',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1499.664,
  },
  {
    title: 'The Blissful Devotee and His Cosmic Romance',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 2006.304,
  },
  {
    title: 'I Meet My Master Swami Sri Yukteswar',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1555.848,
  },
  {
    title: 'Two Penniless Boys in Brindaban',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 5826.12,
  },
  {
    title: 'Years in My Masters Hermitage',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1469.76,
  },
  {
    title: 'The Sleepless Saint',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1624.248,
  },
  {
    title: 'An Experience in Cosmic Consciousness',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1921.824,
  },
  {
    title: 'The Cauliflower Robbery',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 2407.56,
  },
  {
    title: 'Outwitting the Stars',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1257.024,
  },
  {
    title: 'Sasi and the Three Sapphires',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1103.16,
  },
  {
    title: 'A Mohammedan Wonder Worker',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 586.104,
  },
  {
    title: 'My Master in Calcutta Appears in Serampore',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1720.008,
  },
  {
    title: 'We Do Not Visit Kashmir',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1103.88,
  },
  {
    title: 'We Visit Kashmir',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1148.136,
  },
  {
    title: 'The Heart of a Stone Image',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1698.36,
  },
  {
    title: 'I Receive My University Degree',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 958.056,
  },
  {
    title: 'I Become a Monk of the Swami Order',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1994.112,
  },
  {
    title: 'Brother Ananta and Sister Nalini',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1540.224,
  },
  {
    title: 'The Science of Kriya Yoga',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 880.704,
  },
  {
    title: 'Founding a Yoga School in Ranchi',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 799.656,
  },
  {
    title: 'Kashi Reborn and Discovered',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 2484.72,
  },
  {
    title: 'Rabindranath Tagore and I Compare Schools',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1501.248,
  },
  {
    title: 'The Law of Miracles',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 836.952,
  },
  {
    title: 'An Interview With the Sacred Mother',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1962.264,
  },
  {
    title: 'Rama Is Raised From the Dead',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1714.896,
  },
  {
    title: 'Babaji Yogi Christ of Modern India',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1455.816,
  },
  {
    title: 'Materializing a Palace in the Himalayas',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 2586.864,
  },
  {
    title: 'The Christlike Life of Lahiri Mahasaya',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 2118.336,
  },
  {
    title: 'Babajis Interest in the West',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1874.952,
  },
  {
    title: 'I Go to America',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1543.968,
  },
  {
    title: 'Luther Burbank A Saint Amid the Roses',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 913.848,
  },
  {
    title: 'Therese Neumann the Catholic Stigmatist',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1463.856,
  },
  {
    title: 'I Return to India',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1325.496,
  },
  {
    title: 'An Idyll in South India',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 2420.52,
  },
  {
    title: 'Last Days With My Guru',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 2718.312,
  },
  {
    title: 'The Resurrection of Sri Yukteswar',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 4267.776,
  },
  {
    title: 'With Mahatma Gandhi at Wardha',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 3200.712,
  },
  {
    title: 'The Bengali Joy Permeated Mother',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 919.752,
  },
  {
    title: 'The Woman Yogi Who Never Eats',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 1984.896,
  },
  {
    title: 'I Return to the West',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 807.408,
  },
  {
    title: 'At Encinitas in California',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 594.24,
  },
  {
    title: 'The Years 1940 1951',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 2251.488,
  },
  {
    title: 'Afterword',
    url: 'https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/01_AYBen-001--Introduction.m4a?alt=media&token=f83af303-8d2d-4f46-82d8-ab1ae0417001',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    duration: 377.136,
  },
];

// Privacy -> https://pages.flycricket.io/yogi/privacy.html
// Terms -> https://pages.flycricket.io/yogi/terms.html
const fs = require('fs');

const files = fs.readdirSync(
  '/home/werfree/shared/Torrent/AutobiographyofaYogi/dup',
);

const tracks = files.map((track, index) => {
  return {
    title: TRACKS[index].title,
    url: `https://firebasestorage.googleapis.com/v0/b/hello-6c55d.appspot.com/o/${track}?alt=media`,
    imageUrl: TRACKS[index].imageUrl,
    duration: TRACKS[index].duration,
  };
});
console.log(tracks);
