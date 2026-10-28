import { Client } from '../types';

export const INITIAL_CLIENTS: Client[] = [
  {
    id: 'oakline-renovation',
    name: 'Oakline Renovation Co.',
    slug: 'oakline-renovation',
    category: 'Residential Remodeling',
    status: 'active',
    contactName: 'Marcus Vance',
    email: 'marcus@oaklinerenovation.demo',
    phone: '(512) 843-9201',
    city: 'Austin',
    state: 'TX',
    createdAt: '2026-08-14',
    lastUpdated: '2026-10-24',
    nextReportDate: '2026-11-01',
    conversionsCount: 27,
    config: {
      business: {
        name: 'Oakline Renovation Co.',
        tagline: 'Thoughtful renovations. Built around the way you live.',
        description: 'From custom kitchen transformations to carefully finished interiors, Oakline Renovation Co. helps homeowners across Austin create spaces that feel considered, functional, and built to last.',
        contactName: 'Marcus Vance',
        email: 'hello@oaklinerenovation.demo',
        phone: '(512) 843-9201',
        city: 'Austin',
        region: 'Texas',
        fullAddress: '2401 E 6th St, Suite 402, Austin, TX 78702',
        postalCode: '78702',
        hours: 'Mon – Fri: 8:00 AM – 5:30 PM'
      },
      branding: {
        primaryColor: '#253D32',
        secondaryColor: '#A9B8A5',
        fontPreference: 'DM Sans + Serif',
        logoText: 'Oakline Renovation Co.',
        heroImageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        heroHeading: 'Thoughtful renovations. Built around the way you live.',
        heroSubheading: 'From kitchen transformations to carefully finished interiors, we design and build living spaces that balance architectural refinement with enduring everyday utility.',
        ctaLabel: 'Request a Consultation'
      },
      services: [
        {
          id: 'srv-kitchen',
          name: 'Kitchen Remodeling',
          slug: 'kitchen-remodeling',
          primary: true,
          iconName: 'UtensilsCrossed',
          description: 'Bespoke layouts, custom cabinetry, quartz and soapstone countertops, and integrated appliance suites.',
          fullDescription: 'Our kitchen remodeling process reimagines the functional heart of your home. We balance traffic flow, natural light, and structural opening with tailored storage, premium induction cooking zones, custom white oak or walnut cabinetry, and tactile stone surfaces.',
          features: ['Custom island engineering', 'Concealed pantry systems', 'Under-cabinet circadian lighting', 'Architectural range hoods', 'Zero-clearance refrigeration'],
          startingPrice: '$45,000'
        },
        {
          id: 'srv-bath',
          name: 'Bathroom Remodeling',
          slug: 'bathroom-remodeling',
          primary: false,
          iconName: 'Droplet',
          description: 'Curbless showers, custom vanities, limestone tiles, and discreet radiant heat flooring.',
          fullDescription: 'Turn master en-suites and guest bathrooms into restorative retreats. We specialize in watertight Schluter waterproofing systems, curbless walk-in showers with linear drains, floating fluted vanities, and ambient architectural lighting.',
          features: ['Zero-threshold curbless showers', 'In-floor hydronic or electric heat', 'Natural zellige and limestone tile', 'Concealed thermostatic valves', 'Custom solid-surface niches'],
          startingPrice: '$28,000'
        },
        {
          id: 'srv-cabinetry',
          name: 'Custom Cabinetry',
          slug: 'custom-cabinetry',
          primary: false,
          iconName: 'Archive',
          description: 'Built-in storage, pantry millwork, mudroom cubbies, and precision architectural joinery.',
          fullDescription: 'Hand-crafted in local millwork shops using select American white oak, walnut, and formaldehyde-free hardwood plywood. Our custom cabinetry is built to order to maximize every inch of vertical and corner storage.',
          features: ['Full-extension soft-close Blum hardware', 'Hand-rubbed low-VOC oils & lacquer', 'Custom appliance front paneling', 'Integrated brass finger pulls', 'Bookmatched veneer grain matching'],
          startingPrice: '$16,000'
        },
        {
          id: 'srv-interior',
          name: 'Interior Renovations',
          slug: 'interior-renovations',
          primary: false,
          iconName: 'Home',
          description: 'Whole-home space planning, structural beam installations, flooring replacements, and staircase redesigns.',
          fullDescription: 'For homeowners looking to modernize vintage Austin ranch homes, historic bungalows, or new builds with open layouts. We manage structural engineering, permit approvals, HVAC zoning, and complete architectural finish work.',
          features: ['Structural wall removal & LVL beam installation', 'Wide-plank engineered European oak', 'Architectural drywall reveals & flush baseboards', 'High-efficiency thermal window upgrades'],
          startingPrice: '$75,000'
        },
        {
          id: 'srv-carpentry',
          name: 'Finish Carpentry',
          slug: 'finish-carpentry',
          primary: false,
          iconName: 'Hammer',
          description: 'Coffered ceilings, wainscoting, solid timber mantlepieces, and custom architectural door casings.',
          fullDescription: 'The details that elevate a house into a bespoke home. Our master carpenters install custom casing profiles, tongue-and-groove cedar porch ceilings, acoustic slat walls, and precision mitering.',
          features: ['Precision seamless miters', 'Solid white oak interior headers', 'Sound-dampening acoustic wall paneling', 'Fireplace surrounds & timber mantels'],
          startingPrice: '$8,500'
        }
      ],
      serviceAreas: [
        {
          id: 'area-austin-central',
          name: 'Central Austin & Tarrytown',
          slug: 'central-austin-tarrytown',
          county: 'Travis County',
          description: 'Historic home preservation and modernized kitchen renovations across Tarrytown, Clarksville, and Central Austin.',
          featuredProjectsCount: 14,
          highlights: ['Historic district permit management', 'Preserved architectural details with modern kitchens', 'Bespoke alley garage and studio conversions']
        },
        {
          id: 'area-westlake',
          name: 'West Lake Hills & Rollingwood',
          slug: 'westlake-rollingwood',
          county: 'Travis County',
          description: 'Luxury master suite remodels, whole-home living transformations, and contemporary hill country architectural renovations.',
          featuredProjectsCount: 19,
          highlights: ['Expansive floor-to-ceiling glass wall integration', 'Curbless spa en-suite bathrooms with limestone', 'Custom wine cellars and entertainment wet bars']
        },
        {
          id: 'area-south-congress',
          name: 'South Congress & Zilker',
          slug: 'south-congress-zilker',
          county: 'Travis County',
          description: 'Mid-century modern updates, indoor-outdoor open floorplan conversions, and warm organic modern aesthetic builds.',
          featuredProjectsCount: 11,
          highlights: ['Organic modern architectural timber details', 'Compact footprint spatial optimization', 'Seamless patio door transitions']
        },
        {
          id: 'area-round-rock',
          name: 'Round Rock & Cedar Park',
          slug: 'round-rock-cedar-park',
          county: 'Williamson County',
          description: 'Spacious suburban kitchen expansions, master bath additions, and full-interior modernization for growing families.',
          featuredProjectsCount: 8,
          highlights: ['Double island kitchen extensions', 'Pantry walk-in room construction', 'Dedicated home office custom millwork']
        }
      ],
      projects: [
        {
          id: 'proj-1',
          title: 'The Tarrytown Modern Heritage Kitchen',
          category: 'Kitchens',
          location: 'Tarrytown, Austin, TX',
          image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
          timeline: '8 Weeks',
          budgetRange: '$85,000 – $95,000',
          description: 'Complete transformation of a compartmentalized 1950s kitchen into an expansive, light-filled gathering hub with white oak cabinetry, Taj Mahal quartzite, and a concealed scullery.',
          scopeHighlights: ['Removed two load-bearing walls and installed recessed steel beam', 'Custom rift-sawn white oak cabinets with integrated J-pulls', 'Sub-Zero refrigeration and Wolf induction cooktop', 'Unlacquered brass plumbing fixtures by Waterworks']
        },
        {
          id: 'proj-2',
          title: 'West Lake Hills Limestone Spa En-Suite',
          category: 'Bathrooms',
          location: 'West Lake Hills, Austin, TX',
          image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
          timeline: '6 Weeks',
          budgetRange: '$48,000 – $55,000',
          description: 'A serene primary bath featuring a massive walk-in shower lined with honed French limestone slabs, a freestanding matte resin soaking tub, and fluted white oak floating vanity.',
          scopeHighlights: ['Schluter curbless waterproof pan with linear infinity drain', 'Full slab honed beige limestone walls with integrated shampoo niche', 'Custom double sink vanity with stone vessel bowls', 'In-wall motorized privacy roller shading']
        },
        {
          id: 'proj-3',
          title: 'Zilker Mid-Century Open Living Remodel',
          category: 'Full Interiors',
          location: 'Zilker, Austin, TX',
          image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
          timeline: '12 Weeks',
          budgetRange: '$140,000 – $165,000',
          description: 'Whole-house reconfiguration embracing organic modern lines, tongue-and-groove cedar ceiling beams, wide-plank European oak flooring, and custom fireplace hearth.',
          scopeHighlights: ['Vaulted ceiling conversion with structural collar ties', '8-inch engineered white oak floors with ultra-matte finish', 'Custom architectural steel and glass interior partition door', 'Zone-controlled variable speed heat pump HVAC']
        },
        {
          id: 'proj-4',
          title: 'Rollingwood Architectural Walnut Millwork & Bar',
          category: 'Cabinetry',
          location: 'Rollingwood, Austin, TX',
          image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
          timeline: '4 Weeks',
          budgetRange: '$32,000 – $38,000',
          description: 'Bespoke entertaining bar and library bookcase wall featuring solid black walnut, antiqued bronze mirror backing, integrated LED dimming, and dual temperature wine column.',
          scopeHighlights: ['Bookmatched natural American walnut veneer', 'Dimmable recessed 2700K warm LED channels in all shelving', 'Perlick dual-zone undercounter beverage center', 'Solid brass custom wire grilles on lower cabinet doors']
        }
      ],
      seo: {
        homepageTitle: 'Kitchen & Bathroom Remodeling Austin TX | Oakline Renovation Co.',
        homepageDescription: 'Oakline Renovation Co. delivers high-craft kitchen remodeling, luxury bathroom renovations, and custom interior carpentry across Austin, Tarrytown, and West Lake Hills.',
        canonicalUrl: 'https://oaklinerenovation.demo',
        primaryKeyword: 'kitchen remodeling austin tx',
        targetLocations: ['Austin, TX', 'West Lake Hills, TX', 'Rollingwood, TX', 'Tarrytown, TX', 'Round Rock, TX'],
        searchConsolePropertyId: 'sc-domain:oaklinerenovation.demo',
        ga4MeasurementId: 'G-OAKLINE2026'
      },
      netlifyForm: {
        formName: 'contractor-contact-v1',
        honeypotField: 'bot-field',
        notificationEmail: 'leads@oaklinerenovation.demo',
        hasSimulatedError: false
      }
    }
  },
  {
    id: 'summit-home-services',
    name: 'Summit Home Services',
    slug: 'summit-home-services',
    category: 'General Contractor',
    status: 'draft',
    contactName: 'Elena Rostova',
    email: 'elena@summithomeservices.demo',
    phone: '(303) 719-4820',
    city: 'Denver',
    state: 'CO',
    createdAt: '2026-09-02',
    lastUpdated: '2026-10-21',
    nextReportDate: '2026-11-15',
    conversionsCount: 14,
    config: {
      business: {
        name: 'Summit Home Services',
        tagline: 'Reliable craftsmanship for Colorado mountain and metro homes.',
        description: 'Comprehensive residential remodeling, high-durability siding, insulation, and basement finishings tailored to Denver’s climate.',
        contactName: 'Elena Rostova',
        email: 'info@summithomeservices.demo',
        phone: '(303) 719-4820',
        city: 'Denver',
        region: 'Colorado',
        fullAddress: '1420 Larimer St, Suite 300, Denver, CO 80202',
        postalCode: '80202',
        hours: 'Mon – Fri: 7:30 AM – 5:00 PM'
      },
      branding: {
        primaryColor: '#2B3A42',
        secondaryColor: '#8C9B90',
        fontPreference: 'Inter Modern',
        logoText: 'Summit Home Services',
        heroImageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
        heroHeading: 'Built for Colorado. Engineered for life.',
        heroSubheading: 'From complete basement transformations to resilient exterior cladding, Summit Home delivers precision contractor services built around longevity.',
        ctaLabel: 'Schedule Site Visit'
      },
      services: [
        {
          id: 'srv-summit-1',
          name: 'Basement Finishing',
          slug: 'basement-finishing',
          primary: true,
          iconName: 'Home',
          description: 'Expanding your living footprint with insulated, dry, code-compliant lower level retreats.',
          fullDescription: 'Custom guest suites, media lounges, and home fitness studios with high R-value insulation and moisture barriers.',
          features: ['Egress window excavation & installation', 'Subfloor thermal break barriers', 'Acoustic drywall ceilings'],
          startingPrice: '$35,000'
        },
        {
          id: 'srv-summit-2',
          name: 'Composite Decking',
          slug: 'composite-decking',
          primary: false,
          iconName: 'Layers',
          description: 'Trex and TimberTech multi-tier outdoor living decks designed for extreme freeze-thaw cycles.',
          fullDescription: 'Resilient outdoor decks that withstand heavy snow loads and Colorado UV exposure without fading or splintering.',
          features: ['Steel frame substructure options', 'Concealed fastener installation', 'Integrated low-voltage stair riser lights'],
          startingPrice: '$18,000'
        }
      ],
      serviceAreas: [
        {
          id: 'area-denver-metro',
          name: 'Denver Metro & Wash Park',
          slug: 'denver-metro',
          county: 'Denver County',
          description: 'Modernizing historic brick bungalows and Victorian residences across Washington Park and Highlands.',
          featuredProjectsCount: 9,
          highlights: ['Preservation-friendly structural reinforcement', 'High-efficiency thermal wall retrofits']
        }
      ],
      projects: [
        {
          id: 'proj-summit-1',
          title: 'Wash Park Garden Level Living Suite',
          category: 'Full Interiors',
          location: 'Denver, CO',
          image: 'https://images.unsplash.com/photo-1502005229762-ee152da915d6?auto=format&fit=crop&w=1200&q=80',
          timeline: '7 Weeks',
          budgetRange: '$52,000 – $60,000',
          description: 'Converted an unfinished 1920s brick cellar into a bright, waterproof guest bedroom, wet bar, and acoustic office.',
          scopeHighlights: ['Excavated two egress window wells', 'Closed-cell spray foam insulation', 'Luxury vinyl cork-backed plank flooring']
        }
      ],
      seo: {
        homepageTitle: 'General Contractor Denver CO | Summit Home Services',
        homepageDescription: 'Summit Home Services provides basement finishing, deck building, and home additions in Denver, CO. Licensed and insured local builders.',
        canonicalUrl: 'https://summithomeservices.demo',
        primaryKeyword: 'general contractor denver co',
        targetLocations: ['Denver, CO', 'Lakewood, CO', 'Centennial, CO'],
        searchConsolePropertyId: 'sc-domain:summithomeservices.demo',
        ga4MeasurementId: 'G-SUMMIT2026'
      },
      netlifyForm: {
        formName: 'summit-estimate-form',
        honeypotField: 'bot-field',
        notificationEmail: 'estimates@summithomeservices.demo',
        hasSimulatedError: false
      }
    }
  },
  {
    id: 'cedar-stone-remodeling',
    name: 'Cedar & Stone Remodeling',
    slug: 'cedar-stone-remodeling',
    category: 'Bespoke Carpentry & Design',
    status: 'active',
    contactName: 'Julian Croft',
    email: 'julian@cedarandstone.demo',
    phone: '(503) 610-8842',
    city: 'Portland',
    state: 'OR',
    createdAt: '2026-07-19',
    lastUpdated: '2026-10-22',
    nextReportDate: '2026-11-05',
    conversionsCount: 19,
    config: {
      business: {
        name: 'Cedar & Stone Remodeling',
        tagline: 'Pacific Northwest architectural timber, stone and custom renovations.',
        description: 'Pairing organic materials with crisp Scandinavian architecture. Specialized in sustainable cedar craftsmanship, structural timberwork, and bespoke kitchens.',
        contactName: 'Julian Croft',
        email: 'studio@cedarandstone.demo',
        phone: '(503) 610-8842',
        city: 'Portland',
        region: 'Oregon',
        fullAddress: '811 SE Stark St, Portland, OR 97214',
        postalCode: '97214',
        hours: 'Mon – Fri: 8:30 AM – 5:00 PM'
      },
      branding: {
        primaryColor: '#36392D',
        secondaryColor: '#B5A895',
        fontPreference: 'DM Serif Display',
        logoText: 'Cedar & Stone',
        heroImageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
        heroHeading: 'Where timber, stone, and everyday life converge.',
        heroSubheading: 'We craft intentional homes rooted in Pacific Northwest natural beauty, utilizing reclaimed western red cedar, Basalt stonework, and precise joinery.',
        ctaLabel: 'Begin Your Project'
      },
      services: [
        {
          id: 'srv-cs-1',
          name: 'Architectural Timber & Ceilings',
          slug: 'timber-ceilings',
          primary: true,
          iconName: 'Hammer',
          description: 'Glulam post-and-beam construction, cedar tongue-and-groove cladding, and timber pavilions.',
          fullDescription: 'Highlighting natural wood grain and organic warmth through exposed joists, Douglas fir roof trusses, and precision joinery.',
          features: ['FSC-certified Pacific lumber', 'Hidden structural steel connector brackets', 'Natural matte UV oil sealers'],
          startingPrice: '$24,000'
        }
      ],
      serviceAreas: [
        {
          id: 'area-portland-west-hills',
          name: 'Portland West Hills & Lake Oswego',
          slug: 'west-hills-lake-oswego',
          county: 'Multnomah County',
          description: 'Custom renovations for hillside modernist homes and lakefront retreats.',
          featuredProjectsCount: 16,
          highlights: ['Hillside geotechnical engineering coordination', 'Floor-to-ceiling glass wall integration']
        }
      ],
      projects: [
        {
          id: 'proj-cs-1',
          title: 'Lake Oswego Basalt & Cedar Residence',
          category: 'Full Interiors',
          location: 'Lake Oswego, OR',
          image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
          timeline: '10 Weeks',
          budgetRange: '$110,000 – $135,000',
          description: 'A complete interior refresh integrating local basalt fireplace masonry, custom black walnut kitchen island, and hidden acoustic wood ceilings.',
          scopeHighlights: ['Hand-dressed Oregon basalt masonry', 'Western red cedar acoustic linear ceiling', 'Custom integrated brass kitchen pulls']
        }
      ],
      seo: {
        homepageTitle: 'Architectural Remodeling Portland OR | Cedar & Stone',
        homepageDescription: 'Cedar & Stone designs and crafts premium timber, stone, and kitchen renovations across Portland and Lake Oswego. Sustainable Pacific Northwest design.',
        canonicalUrl: 'https://cedarandstone.demo',
        primaryKeyword: 'architectural remodeling portland or',
        targetLocations: ['Portland, OR', 'Lake Oswego, OR', 'Beaverton, OR'],
        searchConsolePropertyId: 'sc-domain:cedarandstone.demo',
        ga4MeasurementId: 'G-CEDAR2026'
      },
      netlifyForm: {
        formName: 'cedar-stone-inquiry',
        honeypotField: 'bot-field',
        notificationEmail: 'inquiries@cedarandstone.demo',
        hasSimulatedError: false
      }
    }
  },
  {
    id: 'apex-exterior-systems',
    name: 'Apex Roofing & Siding',
    slug: 'apex-exterior-systems',
    category: 'Exterior Envelope',
    status: 'launching',
    contactName: 'Darren Price',
    email: 'darren@apexsystems.demo',
    phone: '(214) 550-1928',
    city: 'Dallas',
    state: 'TX',
    createdAt: '2026-10-01',
    lastUpdated: '2026-10-26',
    nextReportDate: '2026-11-20',
    conversionsCount: 9,
    config: {
      business: {
        name: 'Apex Roofing & Siding',
        tagline: 'High-performance architectural roofing and James Hardie siding.',
        description: 'Engineered for Texas storm resilience, hail resistance, and thermal efficiency. Certified Class 4 impact rated roofing specialists.',
        contactName: 'Darren Price',
        email: 'estimates@apexsystems.demo',
        phone: '(214) 550-1928',
        city: 'Dallas',
        region: 'Texas',
        fullAddress: '7800 Preston Rd, Suite 210, Dallas, TX 75252',
        postalCode: '75252',
        hours: 'Mon – Sat: 7:00 AM – 6:00 PM'
      },
      branding: {
        primaryColor: '#2D3748',
        secondaryColor: '#718096',
        fontPreference: 'DM Sans',
        logoText: 'Apex Systems',
        heroImageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1600&q=85',
        heroHeading: 'Precision exterior protection for modern homes.',
        heroSubheading: 'Class 4 impact-rated standing seam metal roofing, James Hardie fiber cement siding, and seamless gutter drainage systems.',
        ctaLabel: 'Request Free Roof Inspection'
      },
      services: [
        {
          id: 'srv-apex-1',
          name: 'Standing Seam Metal Roofing',
          slug: 'metal-roofing',
          primary: true,
          iconName: 'Shield',
          description: '24-gauge concealed fastener architectural metal roofing built to withstand 130 mph winds and golf-ball hail.',
          fullDescription: 'Modern standing seam metal roofs that reflect solar radiation, lower summer cooling loads by up to 25%, and last 50+ years.',
          features: ['Concealed clip thermal expansion design', 'Kynar 500 fade-resistant finish', 'Lifetime craftsmanship guarantee'],
          startingPrice: '$22,000'
        }
      ],
      serviceAreas: [
        {
          id: 'area-dallas-highland-park',
          name: 'Highland Park & University Park',
          slug: 'highland-park-dallas',
          county: 'Dallas County',
          description: 'Premium slate, standing seam, and designer tile exterior installations for Park Cities estates.',
          featuredProjectsCount: 12,
          highlights: ['HOA architectural committee compliance', 'Historic copper valley flashings']
        }
      ],
      projects: [
        {
          id: 'proj-apex-1',
          title: 'Highland Park Standing Seam & Hardie Siding',
          category: 'Exterior',
          location: 'Dallas, TX',
          image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80',
          timeline: '3 Weeks',
          budgetRange: '$45,000 – $52,000',
          description: 'Full roof replacement with 24-gauge matte black standing seam metal and board-and-batten Hardie siding upgrade.',
          scopeHighlights: ['Removed two layers of old composition shingles', 'Installed ice & water shield over entire roof deck', 'Custom fabricated chimney copper crickets']
        }
      ],
      seo: {
        homepageTitle: 'Metal Roofing & Hardie Siding Dallas TX | Apex Systems',
        homepageDescription: 'Apex Roofing & Siding provides Class 4 impact metal roofing, Hardie board siding, and storm repair in Dallas and Highland Park.',
        canonicalUrl: 'https://apexsystems.demo',
        primaryKeyword: 'metal roofing dallas tx',
        targetLocations: ['Dallas, TX', 'Highland Park, TX', 'Plano, TX'],
        searchConsolePropertyId: 'sc-domain:apexsystems.demo',
        ga4MeasurementId: 'G-APEX2026'
      },
      netlifyForm: {
        formName: 'apex-inspection-quote',
        honeypotField: 'bot-field',
        notificationEmail: 'inspections@apexsystems.demo',
        hasSimulatedError: false
      }
    }
  }
];
