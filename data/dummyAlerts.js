// Generate deterministic transaction IDs (64-char hex strings)
// Using seeded approach for consistent builds
function generateTxId(seed) {
    const chars = '0123456789abcdef';
    let result = '';
    for (let i = 0; i < 64; i++) {
        const charIndex = (seed + i) % chars.length;
        result += chars[charIndex];
    }
    return result;
}

// Generate deterministic issuer addresses (43-char Qubic addresses)
function generateIssuer(seed) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ9';
    let address = '';
    for (let i = 0; i < 43; i++) {
        const charIndex = (seed + i * 7) % chars.length;
        address += chars[charIndex];
    }
    return `${address.slice(0, 3)}...${address.slice(-3)}`;
}

export const dummyAlerts = [
    // Recent whale transactions (last hour)
    {
        txId: generateTxId(1),
        amount: 2500000,
        assetName: "CFB",
        price: 0.00048,
        issuer: generateIssuer(1),
        timestamp: new Date(Date.now() - 1000 * 60 * 2).toISOString(), // 2 mins ago - WHALE
    },
    {
        txId: generateTxId(2),
        amount: 150000,
        assetName: "QX",
        price: 13.2,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 8).toISOString(), // 8 mins ago - WHALE
    },
    {
        txId: generateTxId(2),
        amount: 85000,
        assetName: "Qubic",
        price: 0.0000028,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 12).toISOString(), // 12 mins ago
    },
    {
        txId: generateTxId(2),
        amount: 32000,
        assetName: "CFB",
        price: 0.00045,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 18).toISOString(), // 18 mins ago
    },
    {
        txId: generateTxId(2),
        amount: 5000000,
        assetName: "CFB",
        price: 0.00047,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 25).toISOString(), // 25 mins ago - MEGA WHALE
    },
    {
        txId: generateTxId(2),
        amount: 1200,
        assetName: "QX",
        price: 12.8,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 35).toISOString(), // 35 mins ago
    },
    {
        txId: generateTxId(2),
        amount: 45000,
        assetName: "Qubic",
        price: 0.0000026,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 42).toISOString(), // 42 mins ago
    },
    {
        txId: generateTxId(2),
        amount: 1800000,
        assetName: "CFB",
        price: 0.00046,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 55).toISOString(), // 55 mins ago - WHALE
    },
    // Last few hours
    {
        txId: generateTxId(2),
        amount: 25000,
        assetName: "CFB",
        price: 0.00044,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.5).toISOString(), // 1.5 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 800,
        assetName: "QX",
        price: 12.5,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 3200000,
        assetName: "Qubic",
        price: 0.0000025,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2.5).toISOString(), // 2.5 hours ago - WHALE
    },
    {
        txId: generateTxId(2),
        amount: 15000,
        assetName: "CFB",
        price: 0.00045,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 95000,
        assetName: "QX",
        price: 13.0,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // 4 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 18000,
        assetName: "Qubic",
        price: 0.0000027,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 420000,
        assetName: "CFB",
        price: 0.00048,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(), // 6 hours ago - WHALE
    },
    {
        txId: generateTxId(2),
        amount: 5500,
        assetName: "QX",
        price: 12.9,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 7).toISOString(), // 7 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 28000,
        assetName: "CFB",
        price: 0.00043,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(), // 8 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 120000,
        assetName: "Qubic",
        price: 0.0000024,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 9).toISOString(), // 9 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 3500,
        assetName: "QX",
        price: 12.6,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString(), // 10 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 22000,
        assetName: "CFB",
        price: 0.00046,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 11).toISOString(), // 11 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 1500000,
        assetName: "CFB",
        price: 0.00049,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago - WHALE
    },
    {
        txId: generateTxId(2),
        amount: 68000,
        assetName: "Qubic",
        price: 0.0000026,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 14).toISOString(), // 14 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 1200,
        assetName: "QX",
        price: 12.7,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 16).toISOString(), // 16 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 38000,
        assetName: "CFB",
        price: 0.00044,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(), // 18 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 220000,
        assetName: "QX",
        price: 13.1,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(), // 20 hours ago - WHALE
    },
    {
        txId: generateTxId(2),
        amount: 15000,
        assetName: "Qubic",
        price: 0.0000025,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 22).toISOString(), // 22 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 8500,
        assetName: "CFB",
        price: 0.00045,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 24 hours ago
    },
    // Older transactions
    {
        txId: generateTxId(2),
        amount: 3200000,
        assetName: "CFB",
        price: 0.00047,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(), // 26 hours ago - WHALE
    },
    {
        txId: generateTxId(2),
        amount: 45000,
        assetName: "Qubic",
        price: 0.0000024,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(), // 30 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 180000,
        assetName: "QX",
        price: 12.8,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(), // 36 hours ago - WHALE
    },
    {
        txId: generateTxId(2),
        amount: 25000,
        assetName: "CFB",
        price: 0.00043,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 42).toISOString(), // 42 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 120000,
        assetName: "Qubic",
        price: 0.0000023,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 48 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 2800,
        assetName: "QX",
        price: 12.5,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 54).toISOString(), // 54 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 35000,
        assetName: "CFB",
        price: 0.00048,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 60).toISOString(), // 60 hours ago
    },
    {
        txId: generateTxId(2),
        amount: 950000,
        assetName: "CFB",
        price: 0.00046,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago - WHALE
    },
    {
        txId: generateTxId(2),
        amount: 55000,
        assetName: "Qubic",
        price: 0.0000027,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 84).toISOString(), // 3.5 days ago
    },
    {
        txId: generateTxId(2),
        amount: 4200,
        assetName: "QX",
        price: 12.9,
        issuer: generateIssuer(2),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(), // 4 days ago
    },
];

export function getTotalVolume() {
    return dummyAlerts.reduce((acc, curr) => acc + curr.amount * curr.price, 0); // Approximating volume in USD/Base currency
}

export function getTotalAlerts() {
    return dummyAlerts.length;
}

export function getUniqueAssets() {
    const assets = new Set(dummyAlerts.map((alert) => alert.assetName));
    return assets.size;
}

export function getBiggestTrade() {
    if (!dummyAlerts || dummyAlerts.length === 0) {
        return { amount: 0, price: 0, assetName: "N/A" };
    }
    return dummyAlerts.reduce((prev, current) => {
        if (!prev || !current) return prev || current;
        return prev.amount * prev.price > current.amount * current.price ? prev : current;
    });
}

export function getRecentAlerts(limit = 5) {
    return [...dummyAlerts]
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, limit);
}

export function getVolumeByAsset() {
    const volumeByAsset = {};
    dummyAlerts.forEach((alert) => {
        const volume = alert.amount * alert.price;
        if (volumeByAsset[alert.assetName]) {
            volumeByAsset[alert.assetName] += volume;
        } else {
            volumeByAsset[alert.assetName] = volume;
        }
    });
    return Object.entries(volumeByAsset).map(([name, value]) => ({ name, value }));
}

export function getVolumeOverTime() {
    const volumeByDay = {};
    dummyAlerts.forEach(alert => {
        const date = new Date(alert.timestamp).toLocaleDateString();
        const volume = alert.amount * alert.price;
        if (volumeByDay[date]) {
            volumeByDay[date] += volume;
        } else {
            volumeByDay[date] = volume;
        }
    });
    return Object.entries(volumeByDay).map(([date, volume]) => ({ date, volume })).sort((a, b) => new Date(a.date) - new Date(b.date));
}

// Whale detection: Transactions with USD value >= $1000
const WHALE_THRESHOLD_USD = 1000;

export function isWhaleAlert(alert) {
    const usdValue = alert.amount * alert.price;
    return usdValue >= WHALE_THRESHOLD_USD;
}

export function getWhaleAlerts(limit = 10) {
    return dummyAlerts
        .filter(alert => isWhaleAlert(alert))
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, limit);
}

export function getWhaleAlertsCount() {
    return dummyAlerts.filter(alert => isWhaleAlert(alert)).length;
}

export function getRecentWhaleAlerts(limit = 5) {
    const oneDayAgo = Date.now() - (1000 * 60 * 60 * 24);
    return dummyAlerts
        .filter(alert => {
            const alertDate = new Date(alert.timestamp).getTime();
            return isWhaleAlert(alert) && alertDate >= oneDayAgo;
        })
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, limit);
}

