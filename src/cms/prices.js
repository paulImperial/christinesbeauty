const prices = [
  {
    key: 1,
    title: 'Body Waxing',
    id: 'bodyHairRemoval',
    image: '/images/hair-removal1.jpg',
    disclaimer: '*All include underneath',
    blurb:
      'Here at Christine’s Beauty we use hot and warm wax, suited for the part of the body being treated. We try to minimise discomfort and ensure your skin is well looked after. We take great care to provide a thorough treatment leaving you silky smooth. Female intimate waxing is one of our specialisms.',
    services: [
      {
        treatment: 'Hollywood * +',
        price: 35,
      },
      {
        treatment: 'Brazillian * +',
        price: 35,
      },
      {
        treatment: 'Bum +',
        price: 10,
      },
      {
        treatment: 'High bikini line +',
        price: 15,
      },
      {
        treatment: 'Standard bikini line',
        price: 12,
      },
      {
        treatment: 'Half leg',
        price: 17,
      },
      {
        treatment: 'Full leg',
        price: 25,
      },
      {
        treatment: 'Under arm',
        price: 10,
      },
      {
        treatment: 'Under arm +',
        price: 15,
      },
      {
        treatment: 'Forearm',
        price: 15,
      },
      {
        treatment: 'Full arm',
        price: 20,
      },
      {
        treatment: 'Back',
        price: 20,
      },
      {
        treatment: 'Chest',
        price: 15,
      },
      {
        treatment: 'Full body',
        price: 85,
      },
    ],
  },
  {
    key: 2,
    title: 'Face Waxing',
    id: 'faceHairRemoval',
    image: '/images/eye-treatments.jpg',
    services: [
        {
          treatment: 'Upper lip',
          price: 7,
        },
        {
          treatment: 'Chin',
          price: 7,
        },
        {
          treatment: 'Sides',
          price: 7,
        },
        {
          treatment: 'Full face excluding eyebrows',
          price: 20,
        },
      ],
    },
  {
    key: 3,
    title: 'Eye Treatments',
    id: 'eyeTreatments',
    image: '/images/eye-treatments.jpg',
    blurb:
      'One of our signature treatment areas, clients return again and again due to Christine’s skill in achieving a symmetrical and flattering look for eyebrows to suit your face in this crucial area, following your instructions precisely. Warm wax is used. Adding a tint to the lashes and brows highlights your natural beauty.',
    disclaimer: '* Requires a patch test 24 hours before treatment',
    services: [
      {
        treatment: 'Eyebrow shape',
        price: 12,
      },
      {
        treatment: 'Eyebrow tint *',
        price: 10,
      },
      {
        treatment: 'Eyebrow shape and tint *',
        price: 20,
      },
      {
        treatment: 'Eyelash tint *',
        price: 10,
      },
      {
        treatment: 'Eyelash tint and eyebrow tint *',
        price: 15,
      },
      {
        treatment: 'Eyebrow shape and tint, and eyebrow tint *',
        price: 25,
      },
    ],
  },
  {
    key: 4,
    title: 'Massage',
    id: 'massage',
    image: '/images/massage1.jpg',
    blurb:
      'Whether you are looking for targeted treatment on a problem area, or releasing tension and relaxing the whole body, our Swedish massage is a firmer treatment. For a more relaxing experience with essential oils we offer aromatherapy massage tailored to you.',
    disclaimer: '',
    services: [
      {
        treatment: 'Swedish back massage',
        price: 35,
        time: '30 minutes',
      },
      {
        treatment: 'Aromatherapy back massage',
        price: 35,
        time: '30 minutes',
      },
      {
        treatment: 'Swedish full body massage',
        price: 50,
        time: '60 minutes',
      },
      {
        treatment: 'Aromatherapy full body massage',
        price: 50,
        time: '60 minutes',
      },
    ],
  },
  {
    key: 5,
    title: 'Facials',
    id: 'facials',
    image: '/images/facials1.jpg',
    blurb:
      'Our facial treatments are tailored to your personal skin type, whether that is dry, mature, oily, sensitive or combination. We use suitable, high quality products chosen especially for you, leaving you feeling refreshed, with an amazing glow.',
    disclaimer: '',
    services: [
      {
        treatment: 'Bronze Facial : Relaxing Facial',
        extraInfo: 'Gently purifies the skin without causing irritation for skin that feels softer, more supple and looks smoother. This facial does not include extractions. Product range: Kaeso Beauty.',
        price: 35,
        time: '35 minutes',
      },
      {
        treatment: 'Silver Facial : Revitalising Facial',
        extraInfo:
          'Leaves skin feeling soft and revitalised with a youthful appearance. Includes extractions if required, and a serum appropriate to you (anti-aging, vitamin C or radiant boost). Product ranges: Kaeso Beauty and Strictly Professional.',
        price: 45,
        time: '45 minutes',
      },
      {
        treatment: 'Gold Facial : Anti-aging Facial',
        extraInfo:
          'Restore your natural glow with a classic facial, designed to cleanse, exfoliate and purify your complexion. Product ranges: HOF Retinol (an original Retinol, Vitamin A based anti-aging skincare line committed to developing healthy, anti-aging products that improve skin texture and reduce the look of fine lines and wrinkles), Kaeso Beauty and Strictly Professional.',
        price: 50,
        time: '50 minutes',
      },
    ],
  },
  {
    key: 6,
    title: 'Manicures and Pedicures',
    id: 'shellac',
    image: '/images/shellac1.jpg',
    blurb:
      'Using high quality polishes, we provide a range of options for your hands, whether you need a quick tidy up or an intensive treatment. We’re on our feet all day and a pedicure is a therapeutic treatment as well as making your feet look and feel beautiful, smooth and moisturised.',
    disclaimer: 'To add Gel to any manicure or pedicure treatment + £10',
    services: [
      {
        treatment: 'Express Manicure',
        extraInfo: '(File, cuticles and paint)',
        price: 20,
      },
      {
        treatment: 'Luxury Manicure',
        extraInfo: '(Soak, file, cuticles, exfoliation, hand and arm massage, hand mask, paint)',
        price: 30,
      },
      {
        treatment: 'Kids’ Manicure',
        extraInfo: '(File and paint)',
        price: 7,
      },
      {
        treatment: 'Express Pedicure',
        extraInfo: '(File, cuticles and paint)',
        price: 20,
      },
      {
        treatment: 'Classic Pedicure',
        extraInfo: '(Soak, file, cuticles, foot massage, exfoliate and paint)',
        price: 30,
      },
      {
        treatment: 'Luxury Pedicure',
        extraInfo: '(Hard skin removal, soak, file, cuticles, foot and leg massage, exfoliate, foot mask and paint)',
        price: 35,
      },
    ],
  },
  {
    key: 7,
    title: 'Gel Nails',
    id: 'hands',
    image: '/images/hands1.jpg',
    blurb:
      'Gel polishes have the advantages of drying straight away and lasting for 2-3 weeks. Unlike acrylic nails, there is no damage to the natural nail on removal. We use high quality brands and a professional level LED lamp to ensure the polish sets well for a beautiful and long-lasting finish.',
    disclaimer: '',
    services: [
      {
        treatment: 'Gel Hands',
        extraInfo: '(File, cuticles, shellac paint and cuticle oil)',
        price: 30,
      },
      {
        treatment: 'Gel Toes',
        extraInfo: 'cuticles, shellac paint and cuticle oil)',
        price: 30,
      },
      {
        treatment: 'Gel Removal and new set',
        extraInfo: '(hands or toes)',
        price: 35,
      },
    ],
  },
];

export default prices;
