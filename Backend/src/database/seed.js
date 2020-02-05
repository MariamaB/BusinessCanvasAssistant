const neo4j = require("neo4j-driver");

const driver = neo4j.driver(
    'bolt://localhost:7687',
    neo4j.auth.basic('graphql', 'graphql')
);

(async function() {
    const session = driver.session();
    try {

        await session.run('MATCH (node) WHERE (node:BusinessModel) OR (node:BMContent) DETACH DELETE node');
        await Promise.all([
            'CREATE (bc1:BMContent { keyPartners: "Payment Providers, Telecoms Partners", keyActivities: "Software Development", valueProposition: "Free Internet & Video calling, cheap calls to phones", customerRelationships: "Self-service", CustomerSegments: "Free Users, Users who want to call phones", keyResources: "Software Developers, Software", channels: "skype.com, headset partnerships", costStructure: "Software Development", revenueStreams:"Free, Prepaid calls, Hardware sales"}) CREATE (bm1:BusinessModel { id: "1", name: "Skype"}) CREATE (bm1)-[r:CONTENT]->(bc1)',
            'CREATE (bc2:BMContent { keyPartners: "Manufactures, Retailers",keyActivities: "Marketing, R&D, Logistics", valueProposition: "BAIT: Razor Handle, HOOK: Blades", customerRelationships: "Built in Lock-in", CustomerSegments: "Customers", keyResources:  "Brand, Patents", channels: "Retail", costStructure: "Marketing R&D, Logistics Manufacturing", revenueStreams: "1x Handle Purchase, Frequent Blade Replacements"}) CREATE (bm2:BusinessModel { id: "2", name: "Gillette"}) CREATE (bm2)-[r:CONTENT]->(bc2)',
            'CREATE (bc3:BMContent { keyPartners: "Platform, OEMS", keyActivities: "Platform Managment, R&D", valueProposition: "Free & Fast search, Search Ads, Display Ads", customerRelationships: "offer users free accounts for other personallized service platforms", CustomerSegments: "Search Users, Android users, Advertiser, Content Owner", keyResources: "Platforms", channels: "google.com subchannels: gmail, youtube, drive, docs etc.", costStructure: "Platform Costs, Content Owners", revenueStreams: "Free, AD Revenue, Display Ad Revenue"}) CREATE (bm3:BusinessModel { id: "3", name: "Google"}) CREATE (bm3)-[r:CONTENT]->(bc3)'
        ].map(statement => session.run(statement)));

        console.log("Data was successfully seeded!");
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await session.close();

        process.exit(0);
    }
})();