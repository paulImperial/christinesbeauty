const prices = [
  {
    key: 1,
    title: 'Body Waxing',
    id: 'bodyHairRemoval',
    image: '/images/hair-removal1.jpg',
    disclaimer: '+ Uses hot wax',
    blurb:
      'This does not include intimate waxing.',
    services: [
      {
        treatment: 'Half leg',
        price: 18,
      },
      {
        treatment: 'Full leg',
        price: 28,
      },
      {
        treatment: 'Under arm',
        price: 10,
      },
      {
        treatment: 'Under arm +',
        price: 13,
      },
      {
        treatment: 'Half arm',
        price: 15,
      },
      {
        treatment: 'Full arm',
        price: 22,
      },
      {
        treatment: 'Back',
        price: 25,
      },
      {
        treatment: 'Chest',
        price: 20,
      },
      {
        treatment: 'Full body',
        price: 85,
        from: true,
      },
      { 
        treatment: 'Tummy', 
        price: 7 
      },
    ],
  },
  {
    key: 2,
    title: 'Face Waxing',
    id: 'faceHairRemoval',
    image: '/images/eye-treatments.jpg',
    disclaimer: '+ Uses hot wax',
    services: [
      {
        treatment: 'Upper lip +',
        price: 7,
      },
      {
        treatment: 'Chin +',
        price: 7,
      },
      {
        treatment: 'Sides +',
        price: 7,
      },
      {
        treatment: 'Neck +',
        price: 7,
      },
      {
        treatment: 'Full face +',
        price: 25,
      },
    ],
  },
  {
    key: 8,
    title: 'Intimate Waxing',
    id: 'intimateWaxing',
    image: '',
    disclaimer: '* Includes Bum  + Uses hot wax',
    services: [
      {
        treatment: 'Hollywood * +',
        price: 40,
      },
      {
        treatment: 'Brazillian * +',
        price: 40,
      },
      {
        treatment: 'Bum wax +',
        price: 10,
      },
      {
        treatment: 'Bum Wax with cheeks +',
        price: 20,
      },
      {
        treatment: 'High bikini line +',
        price: 15,
      },
      {
        treatment: 'Standard bikini line',
        price: 12,
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
        price: 14,
      },
      {
        treatment: 'Eyebrow tint *',
        price: 10,
      },
      {
        treatment: 'Eyebrow shape and tint *',
        price: 22,
      },
      {
        treatment: 'Eyelash tint *',
        price: 10,
      },
      {
        treatment: 'Eyebrow Trio: Eyebrow shape and tint & eyebrow tint *',
        price: 30,
      },
      {
        treatment: 'Lash lift & tint *',
        price: 45,
      },      
      {
        treatment: 'Brow lamination & tint *',
        price: 40,
      },
    ],
  },
  {
    key: 4,
    title: 'Massage',
    id: 'massage',
    image: '/images/massage1.jpg',
    blurb:
      'Swedish massage is a firmer treatment which targets problem areas as well as releasing tension to relax the whole body. Aromatherapy is a more relaxing experience with essential oils that are tailored to you.',
    disclaimer: '',
    services: [
      {
        treatment: 'Swedish back & neck massage',
        price: 37,
        time: '30 minutes',
      },
      {
        treatment: 'Aromatherapy back & neck massage',
        price: 39,
        time: '30 minutes',
      },
      {
        treatment: 'Swedish full body',
        price: 57,
        time: '60 minutes',
      },
      {
        treatment: 'Aromatherapy full body',
        price: 59,
        time: '60 minutes',
      },
      {
        treatment: 'Foot and leg massage',
        price: 30,
        time: '30 minutes',
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
    disclaimer: '* includes a steamer',
    services: [
      {
        treatment: 'Bronze Facial : Relaxing Facial',
        extraInfo: 'A soothing ,relaxing facial without extractions. Perfect for a healthy glow and refreshed complexion with minimal fuss.',
        price: 35,
        time: '35 minutes',
      },
      {
        treatment: 'Silver Facial * : Revitalising Facial',
        extraInfo:
          'Designed to detoxify and refine the complexion, this deep-cleansing facial iuncludes extractions to clear congestion and restore a smooth healthy glow.',
        price: 45,
        time: '45 minutes',
      },
      {
        treatment: 'Gold Facial * : Anti-aging Facial',
        extraInfo:
          'A rejuvenating facial powered by retinol to smooth fine lines, boost collagen and restore a youthful, radiant glow.',
        price: 50,
        time: '50 minutes',
      },
      {
        treatment: 'Seasonal Facial *',
        extraInfo:
          'Indulge in our signature seasonal facial, a luxurious treatment inspired by the time of year. Rejuvenating formulas and soothing rituals leave your skin glowing and renewed.',
        price: 50,
        time: '50 minutes',
      },
            {
        treatment: 'Back Facial *',
        extraInfo:
          'Refresh and renew your skin with our purifying back facial - designed to cleanse, exfoliate and hydrate your back for silky smooth,radiant results.',
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
        extraInfo: '(Soak, file, cuticles, exfoliation, hand and arm massage, mask & paint)',
        price: 45,
      },
      {
        treatment: 'Kids’ Manicure (under 12)',
        extraInfo: '(File and paint)',
        price: 10,
      },
      {
        treatment: 'Express Pedicure',
        extraInfo: '(File, cuticles and paint)',
        price: 20,
      },
      {
        treatment: 'Luxury Pedicure',
        extraInfo: '(Soak, hard skin removal, file, cuticles, exfoliation, foot & leg massage, mask &paint)',
        price: 42,
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
        extraInfo: '(File, cuticles, gel polishg and cuticle oil)',
        price: 32,
      },
      {
        treatment: 'Gel Toes',
        extraInfo: 'File, cuticles, gel polish and cuticle oil)',
        price: 32,
      },
      {
        treatment: 'Gel Removal and new set',
        extraInfo: '(Acetate soap off and new set)',
        price: 37,
      },
      {
        treatment: 'Gel Removal',
        extraInfo: '(Acetate soap off, file, cuticles and cuticle oil)',
        price: 20,
      },
    ],
  },
];

export default prices;
