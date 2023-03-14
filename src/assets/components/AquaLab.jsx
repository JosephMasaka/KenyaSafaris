import '../css/aqualab.css'

function AquaLab() {

    const AquacultureTopics = [
        {
            "AquacultureTitle" : "Introduction to Aquaculture: History, Importance, and Future Prospects."
        },
        {
            "AquacultureTitle" : "Types of Aquaculture: Fish, Shrimp, Mollusks, and Seaweed"
        },
        {
            "AquacultureTitle" : "Aquaculture Systems: Recirculating, Open, and Closed Systems"
        },
        {
            "AquacultureTitle" : "Aquaculture Techniques: Hatchery, Nursery, Grow-out, and Harvesting"
        },
        {
            "AquacultureTitle" : "Aquatic Animal Health Management: Diseases, Prevention, and Treatment"
        },
        {
            "AquacultureTitle" : "Aquaculture Feed and Nutrition: Feed Ingredients, Formulation, and Feeding Management"
        },
        {
            "AquacultureTitle" : "Aquaculture Water Quality: Monitoring, Control, and Treatment"
        },
        {
            "AquacultureTitle" : "Sustainable Aquaculture: Best Management Practices and Certification"
        },
        {
            "AquacultureTitle" : "Aquaculture Economics: Profitability, Marketing, and Investment"
        },
        {
            "AquacultureTitle" : "Aquaculture Policy and Regulations: National and International Perspectives."
        }
    ]

    const AquaponicsTopics = [
        {
            "AquaponicsTitle" : "Introduction to Aquaponics: What is it and How does it Work?"
        },
        {
            "AquaponicsTitle" : "Benefits of Aquaponics: Sustainability, Efficiency, and Health"
        },
        {
            "AquaponicsTitle" : "Aquaponic System Components: Fish Tank, Grow Bed, and Water Pump"
        },
        {
            "AquaponicsTitle" : "Fish Selection for Aquaponics: Species, Requirements, and Feeding"
        },
        {
            "AquaponicsTitle" : "Plant Selection for Aquaponics: Crops, Growth Requirements, and Yield"
        },
        {
            "AquaponicsTitle" : "Aquaponic Water Chemistry: pH, Temperature, and Nutrient Levels"
        },
        {
            "AquaponicsTitle" : "Cycling an Aquaponic System: Nitrogen Cycle, Bacteria, and Ammonia Control"
        },
        {
            "AquaponicsTitle" : "Aquaponic System Design: Indoor and Outdoor Setups, Size, and Scalability"
        },
        {
            "AquaponicsTitle" : "Aquaponic Maintenance: Cleaning, Pruning, and Troubleshooting"
        },
        {
            "AquaponicsTitle" : "Aquaponics vs. Hydroponics: Differences, Similarities, and Pros/Cons."
        }
    ]

    const aquacultureTopicsSliced = AquacultureTopics.slice(0, 5)
    const aquaponicsTopicsSliced = AquaponicsTopics.slice(0, 5)

    return(
        <div className="aqualab">
            <div className='aqualab-wrapper'>
                <div className='flex'>
                    <div className='aquaculture-sect'>
                        <div className='aqualab-overlay'></div>
                        <div className='aquaculture-sect-content'>
                            <h1>Aquaculture Lab</h1>
                            <div className='lab'>
                                <ul>
                                    {
                                        aquacultureTopicsSliced.map((topic) => 
                                            <li>{topic.AquacultureTitle}</li>
                                        )
                                    }
                                </ul>
                            </div>
                            <button>View All Topics</button>
                        </div>
                    </div>
                    <div className='aquaponics-sect'>
                        <div className='aqualab-overlay'></div>
                        <div className='aquaponics-sect-content'>
                            <h1>Aquaponics Lab</h1>
                            <div className='lab'>
                                <ul>
                                    {
                                        aquaponicsTopicsSliced.map((topic) => 
                                            <li>{topic.AquaponicsTitle}</li>
                                        )
                                    }
                                </ul>
                            </div>
                            <button>View All Topics</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AquaLab