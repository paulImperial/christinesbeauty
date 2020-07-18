const prices = [
  {
    title: 'Waxing',
    id: 'hairRemoval',
    image: '/images/hair-removal1.jpg',
    disclaimer: '*All include underneath.',
    blurb:
      'Here at Christine’s Beauty we use hot and warm wax, suited for the part of the body being treated.  We try to minimise discomfort and ensure your skin is well looked after.  We take great care to provide a thorough treatment leaving you silky smooth.',
    services: [
      {
        treatment: 'Half leg',
        price: 12,
      },
      {
        treatment: 'Full leg',
        price: 18,
      },
      {
        treatment: 'Under arm',
        price: 10,
      },
      {
        treatment: 'Forearm',
        price: 8,
      },
      {
        treatment: 'Full arm',
        price: 12,
      },
      {
        treatment: 'Bikini line (standard)',
        price: 8,
      },
      {
        treatment: 'High bikini line',
        price: 10,
      },
      {
        treatment: 'Brazillian *',
        price: 15,
      },
      {
        treatment: 'G-string *',
        price: 18,
      },
      {
        treatment: 'Hollywood *',
        price: 20,
      },
      {
        treatment: 'Upper lip',
        price: 5,
      },
      {
        treatment: 'Chin',
        price: 5,
      },
      {
        treatment: 'Sides',
        price: 5,
      },
      {
        treatment: 'Full face (excluding eyebrows)',
        price: 12,
      },
      {
        treatment: 'Full body (excluding face and brows)',
        price: 50,
      },
      {
        treatment: 'Back wax',
        price: 15,
      },
      {
        treatment: 'Chest wax',
        price: 15,
      },
    ],
  },
  {
    title: 'Eye treatments',
    id: 'eyeTeatments',
    image: '/images/eye-treatments.webp',
    blurb:
      'One of our signature treatments, Christine’s Beauty clients return again and again due to Christine’s skill in achieving a symmetrical and flattering look, to suit your face and following your instructions precisely, in this crucial area.',
    disclaimer: '*Requires a patch test 24 hours before treatment',
    services: [
      {
        treatment: 'Eyebrow tint *',
        price: 10,
      },
      {
        treatment: 'Eyebrow shape',
        price: 8,
      },
      {
        treatment: 'Eyebrow tidyup',
        price: 5,
      },
      {
        treatment: 'Eyebrow shape and tint',
        price: 15,
      },
      {
        treatment: 'Eyelash tint *',
        price: 10,
      },
      {
        treatment: 'Eyelash Tint and Eyebrow tint *',
        price: 8,
      },
    ],
  },
  {
    title: 'Massage',
    id: 'massage',
    image: '/images/massage1.jpg',
    blurb:
      'Whether you are looking for targeted treatment on a problem area, or releasing tension and relaxing the whole body, we can provide a massage to suit your needs and concerns.  Trained in a range of massage therapies including a holistic approach, we can offer aromatherapy to suit your needs.',
    disclaimer: '',
    services: [
      {
        treatment: 'Back, Neck and Shoulder',
        price: 20,
        time: '30 minutes',
      },
      {
        treatment: 'Aromatic Back, Neck and Shoulder',
        price: 25,
        time: '30 minutes',
      },
      {
        treatment: 'Full body Swedish massage',
        price: 35,
        time: '60 minutes',
      },
      {
        treatment: 'Aromatherapy full body massage',
        price: 40,
        time: '60 minutes',
      },
      {
        treatment: 'Reflexology (with foot massage)',
        price: 40,
        time: '60 minutes',
      },
    ],
  },
  {
    title: 'Facials',
    id: 'facials',
    image: '/images/facials1.jpg',
    blurb:
      'Our facial treatments are tailored to your personal skin type, whether that is dry, mature, oily, sensitive or combination. This allows us to use suitable products chosen especially for you, concentrating on creating an amazing glow, leaving you feeling refreshed, relaxed and revitalised.  High quality professional products (Kaeso) are used to give the best experience and result.  The Gold and Platinum treatments benefit from a personalised essential oil blend in the facial massage.',
    disclaimer: '',
    services: [
      {
        treatment: 'Bronze Facial',
        extraInfo: '(Cleanse, tone, exfoliate, facial massage, moisturise)',
        price: 15,
        time: '30 minutes',
      },
      {
        treatment: 'Silver Facial',
        extraInfo: '(Cleanse, tone, exfoliate, facial massage, moisturise, mask)',
        price: 20,
        time: '45 minutes',
      },
      {
        treatment: 'Gold Facial',
        extraInfo:
          '(Cleanse, tone, exfoliate, facial massage (including essential oils tailored to you), moisturise, deep mask, neck massage, extraction and hot towels).',
        price: 30,
        time: '60 minutes',
      },
      {
        treatment: 'Platinum Facial',
        extraInfo:
          '(Cleanse, deep cleanse, tone, exfoliate, facial massage (including essential oils tailored to you), moisturise, deep specialised mask, massage on the neck (plus arms and hands or legs and feet), extraction, hot towels and deep moisturise).',
        price: 40,
        time: '75 minutes',
      },
    ],
  },
  {
    title: 'Shellac',
    id: 'shellac',
    image: '/images/shellac1.jpg',
    blurb:
      'Shellac is a gel polish hybrid that launched a few years back resulting in a long-lasting super glossy manicure.  We use high quality brands (OPI and The Manicure Company) and a professional level LED lamp to ensure the polish sets well for a beautiful and long-lasting finish.',
    disclaimer: '',
    services: [
      {
        treatment: 'Shellac Hands',
        extraInfo: '(File, cuticles, shellac paint and cuticle oil)',
        price: 20,
      },
      {
        treatment: 'Shellac Toes',
        extraInfo: '(File, cuticles, shellac paint and cuticle oil)',
        price: 20,
      },
      {
        treatment: 'To add Shellac to any treatment',
        price: 10,
      },
      {
        treatment: 'Shellac removal                                      ',
        price: 10,
      },
    ],
  },
  {
    title: 'Manicures',
    id: 'hands',
    image: '/images/hands1.jpg',
    blurb:
      'Using high quality polishes (OPI and The Manicure Company), we provide a range of options for your hands, whether you need a quick tidy up or an intensive treatments.  Gel polishes are optional, but have the advantages of drying straight away, and last for 2-3 weeks.  Unlike acrylic nails, there is no damage to the natural nail on removal.',
    disclaimer: '',
    services: [
      {
        treatment: 'Express Manicure',
        extraInfo: '(File, cuticles, hand massage and paint).',
        price: 15,
      },
      {
        treatment: 'Luxury Manicure',
        extraInfo: '(Soak, file, cuticles, exfoliation, hand and arm massage, paint).',
        price: 25,
      },
      {
        treatment: 'Shellac Hands',
        extraInfo: '(File, cuticles, shellac paint and cuticle oil).',
        price: 20,
      },
      {
        treatment: 'Kids Manicure',
        extraInfo: '(File and paint)',
        price: 5,
      },
      {
        treatment: 'Shellac removal                                      ',
        price: 10,
      },
    ],
  },
  {
    title: 'Pedicures',
    id: 'feet',
    image: '/images/foot_picture1.jpg',
    blurb:
      'We’re on our feet all day and a pedicure is a therapeutic treatment as well as making your feet look and feel beautiful, smooth and moisturised.  As with manicures, we offer a range of polish options, including Shellac. ',
    disclaimer: '',
    services: [
      {
        treatment: 'Express Pedicure',
        extraInfo: '(File, cuticles, foot massage and paint)',
        price: 15,
      },
      {
        treatment: 'Classic Pedicure',
        extraInfo: '(Soak, file, cuticles, foot massage, exfoliate and paint)',
        price: 25,
      },
      {
        treatment: 'Luxury Pedicure',
        extraInfo: '(Hard skin removal, soak, file, cuticles, foot and leg massage, exfoliate, foot mask and paint)',
        price: 30,
      },
      {
        treatment: 'Shellac Toes',
        extraInfo: '(File, cuticles, shellac paint and cuticle oil)',
        price: 20,
      },
      {
        treatment: 'Callus peel treatment ',
        extraInfo: '(Optional add on)',
        price: 5,
      },
      {
        treatment: 'To add Shellac to any treatment',
        price: 10,
      },
      {
        treatment: 'Shellac removal                                      ',
        price: 10,
      },
    ],
  },
  {
    title: 'Make Up',
    id: 'makeup',
    image: '/images/makeup.jpg',
    disclaimer: '(Provide your own lashes, if required)',
    services: [
      {
        treatment: 'Special Occasion Makeup',
        price: 20,
      },
      {
        treatment: 'Wedding makeup',
        price: 40,
      },
    ],
  },
];

export default prices;
