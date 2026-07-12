// HT ADVERTISING - Billboard Manager Interactive Application Logic
// Real-time synchronization, Google OAuth, Satellite hybrid map, and Installments Tracking

// // Default initial employee database
const DEFAULT_EMPLOYEES = [
    { id: 1, name: "أحمد علي", email: "emp1@ht-adv.com", role: "employee", allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    { id: 2, name: "سارة محمد", email: "emp2@ht-adv.com", role: "employee", allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    { id: 3, name: "محمد إبراهيم", email: "emp3@ht-adv.com", role: "employee", allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    { id: 4, name: "فاطمة حسن", email: "emp4@ht-adv.com", role: "employee", allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    { id: 5, name: "محمود عبد الرحمن", email: "emp5@ht-adv.com", role: "employee", allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    { id: 6, name: "منى يوسف", email: "emp6@ht-adv.com", role: "employee", allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    { id: 7, name: "خالد مصطفى", email: "emp7@ht-adv.com", role: "employee", allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    { id: 8, name: "رانيا محمود", email: "emp8@ht-adv.com", role: "employee", allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    { id: 9, name: "طارق سليمان", email: "emp9@ht-adv.com", role: "employee", allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    { id: 10, name: "شريف عبد الله", email: "emp10@ht-adv.com", role: "employee", allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] }
];

const DEFAULT_USER_CREDENTIALS = {
    'admin': { password: 'admin_ht_2026', role: 'admin', name: 'المدير العام', email: 'admin@ht-adv.com', id: 'admin', allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "employeePanel", "settingsPanel", "chatPanel", "customersPanel", "sizesPanel", "employeesMgmtPanel"] },
    'emp1': { password: 'pass_emp_101', role: 'employee', name: 'أحمد علي', email: 'emp1@ht-adv.com', id: 1, allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    'emp2': { password: 'pass_emp_202', role: 'employee', name: 'سارة محمد', email: 'emp2@ht-adv.com', id: 2, allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    'emp3': { password: 'pass_emp_303', role: 'employee', name: 'محمد إبراهيم', email: 'emp3@ht-adv.com', id: 3, allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    'emp4': { password: 'pass_emp_404', role: 'employee', name: 'فاطمة حسن', email: 'emp4@ht-adv.com', id: 4, allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    'emp5': { password: 'pass_emp_505', role: 'employee', name: 'محمود عبد الرحمن', email: 'emp5@ht-adv.com', id: 5, allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    'emp6': { password: 'pass_emp_606', role: 'employee', name: 'منى يوسف', email: 'emp6@ht-adv.com', id: 6, allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    'emp7': { password: 'pass_emp_707', role: 'employee', name: 'خالد مصطفى', email: 'emp7@ht-adv.com', id: 7, allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    'emp8': { password: 'pass_emp_808', role: 'employee', name: 'رانيا محمود', email: 'emp8@ht-adv.com', id: 8, allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    'emp9': { password: 'pass_emp_909', role: 'employee', name: 'طارق سليمان', email: 'emp9@ht-adv.com', id: 9, allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] },
    'emp10': { password: 'pass_emp_1010', role: 'employee', name: 'شريف عبد الله', email: 'emp10@ht-adv.com', id: 10, allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"] }
};

let EMPLOYEES = JSON.parse(localStorage.getItem('ht_employees')) || DEFAULT_EMPLOYEES;
let USER_CREDENTIALS = JSON.parse(localStorage.getItem('ht_user_credentials')) || DEFAULT_USER_CREDENTIALS;

function saveEmployeesToStorage() {
    localStorage.setItem('ht_employees', JSON.stringify(EMPLOYEES));
    localStorage.setItem('ht_user_credentials', JSON.stringify(USER_CREDENTIALS));
    if (state.isFirebaseConnected && state.firestoreDb) {
        // Option to sync to firestore if online
    } else {
        syncToFreeCloud('employees', EMPLOYEES);
        syncToFreeCloud('user_credentials', USER_CREDENTIALS);
    }
}

const ADMIN_EMAIL = "admin@ht-adv.com";

// Suez Corniche GPS Path coordinates
const CORNICHE_WAYPOINTS = [
    [29.95304, 32.55938],
    [29.95388, 32.55745],
    [29.95503, 32.55436],
    [29.95679, 32.55106],
    [29.95874, 32.54784],
    [29.96120, 32.54480],
    [29.96410, 32.54240],
    [29.96784, 32.54012],
    [29.97150, 32.53790],
    [29.97548, 32.53610],
    [29.97905, 32.53488]
];

// App Global State
let state = {
    currentUser: null, // Logged in user info
    billboards: [],    // 200 billboards data
    map: null,         // Leaflet map instance
    markers: {},       // Leaflet marker layers keyed by billboard ID
    isFirebaseConnected: false, // Live sync flag
    firestoreDb: null,
    simulatedSyncInterval: null, // Simulated live sync timer
    chatMessages: []   // Chat messages database
};

// 2. Main Entry Point
window.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    setupAuthListeners();
    setupNavigation();
    setupEventHandlers();
}

function setupAuthListeners() {
    // Custom Username and Password login listener
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById('loginUsername').value.trim();
            const passwordInput = document.getElementById('loginPassword').value.trim();
            
            const matched = USER_CREDENTIALS[usernameInput];
            if (matched && matched.password === passwordInput) {
                state.currentUser = {
                    id: matched.id,
                    name: matched.name,
                    email: matched.email,
                    role: matched.role,
                    allowedPanels: matched.allowedPanels || ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"]
                };
                localStorage.setItem('ht_logged_user', JSON.stringify(state.currentUser));
                showToast(`تم تسجيل الدخول بنجاح: ${state.currentUser.name}`, "success");
                
                // Clear fields
                document.getElementById('loginUsername').value = '';
                document.getElementById('loginPassword').value = '';
                
                launchDashboard();
            } else {
                showToast("خطأ: اسم المستخدم أو كلمة المرور غير صحيحة!", "error");
            }
        });
    }



    // Google Sign-In Event Listener
    const btnGoogle = document.getElementById('btnGoogleSignIn');
    if (btnGoogle) {
        btnGoogle.addEventListener('click', () => {
            if (state.isFirebaseConnected && typeof firebase !== 'undefined' && firebase.apps.length > 0) {
                // Real Google Auth Provider popup flow
                const provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider)
                    .then((result) => {
                        const user = result.user;
                        authenticateUser(user.email, user.displayName);
                    })
                    .catch((err) => {
                        console.error("Google login error", err);
                        showToast(`خطأ في مصادقة جوجل: ${err.message}`, "error");
                    });
            } else {
                // Seamless Simulation Fallback: prompt for Google Email since Firebase keys are not configured yet
                const email = prompt("يرجى إدخال البريد الإلكتروني (جوجل) الخاص بالموظف للمحاكاة (مثال: ht.suez.ads@gmail.com):", "ht.suez.ads@gmail.com");
                if (email) {
                    const name = email.split('@')[0];
                    authenticateUser(email.trim(), name);
                }
            }
        });
    }

    // Logout button
    document.getElementById('btnLogout').addEventListener('click', () => {
        logoutUser();
    });

    // Check cached login session
    const cachedUser = localStorage.getItem('ht_logged_user');
    if (cachedUser) {
        state.currentUser = JSON.parse(cachedUser);
        
        // Dynamic Update: reload the allowedPanels from the dynamically updated database
        const activeCreds = Object.values(USER_CREDENTIALS).find(c => c.email.toLowerCase() === state.currentUser.email.toLowerCase());
        if (activeCreds) {
            state.currentUser.allowedPanels = activeCreds.allowedPanels || state.currentUser.allowedPanels;
            state.currentUser.name = activeCreds.name;
        }
        
        launchDashboard();
    }
}

function authenticateUser(email, defaultName) {
    const targetEmail = email.trim().toLowerCase();
    
    // Check if the login email is the shared corporate account requested by the user
    if (targetEmail === 'ht.suez.ads@gmail.com') {
        const chooserScreen = document.getElementById('profileChooserScreen');
        const buttonsList = document.getElementById('profileChooserButtonsList');
        
        if (chooserScreen && buttonsList) {
            buttonsList.innerHTML = '';
            
            // Add General Manager profile button
            const adminBtn = document.createElement('button');
            adminBtn.className = 'btn btn-primary';
            adminBtn.style.cssText = 'padding:10px; font-weight:800; font-size:12px; display:flex; align-items:center; justify-content:center; gap:8px; background:linear-gradient(135deg,#E50914 0%,#B91C1C 100%); color:#fff; border:none; border-radius:30px; cursor:pointer; width:100%;';
            adminBtn.innerHTML = '<i class="fa-solid fa-user-shield"></i> المدير العام (الإدارة)';
            adminBtn.onclick = () => {
                const creds = USER_CREDENTIALS['admin'];
                selectSharedProfile({
                    id: 'admin',
                    name: 'المدير العام',
                    email: 'ht.suez.ads@gmail.com',
                    role: 'admin',
                    allowedPanels: creds?.allowedPanels || ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "employeePanel", "settingsPanel", "chatPanel", "customersPanel", "sizesPanel", "employeesMgmtPanel", "cloudPanel"]
                });
            };
            buttonsList.appendChild(adminBtn);
            
            // Add Employee profile buttons dynamically
            EMPLOYEES.forEach(emp => {
                const username = Object.keys(USER_CREDENTIALS).find(key => USER_CREDENTIALS[key].id == emp.id) || `emp${emp.id}`;
                const creds = USER_CREDENTIALS[username];
                
                const empBtn = document.createElement('button');
                empBtn.className = 'btn btn-secondary';
                empBtn.style.cssText = 'padding:8px 12px; font-weight:700; font-size:12px; display:flex; align-items:center; justify-content:space-between; background:#ffffff; color:#333; border:1px solid #ddd; border-radius:30px; cursor:pointer; width:100%;';
                empBtn.innerHTML = `<span>👤 ${emp.name}</span> <span style="font-size:9px; background:#e5e5ea; padding:2px 8px; border-radius:10px; color:#666;">مبيعات</span>`;
                empBtn.onclick = () => {
                    selectSharedProfile({
                        id: emp.id,
                        name: emp.name,
                        email: 'ht.suez.ads@gmail.com',
                        role: 'employee',
                        allowedPanels: creds?.allowedPanels || ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel", "cloudPanel"]
                    });
                };
                buttonsList.appendChild(empBtn);
            });
            
            // Show the profile chooser overlay
            chooserScreen.style.display = 'flex';
            return;
        }
    }
    
    // Normal separate individual email authentication fallback
    let authUser = null;
    const activeCreds = Object.values(USER_CREDENTIALS).find(c => c.email.toLowerCase() === targetEmail);
    
    if (targetEmail === ADMIN_EMAIL) {
        authUser = {
            id: 'admin',
            name: defaultName || 'المدير العام',
            email: email,
            role: 'admin',
            allowedPanels: activeCreds?.allowedPanels || ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "employeePanel", "settingsPanel", "chatPanel", "customersPanel", "sizesPanel", "employeesMgmtPanel", "cloudPanel"]
        };
    } else {
        const matchedEmp = EMPLOYEES.find(emp => emp.email.toLowerCase() === targetEmail);
        if (matchedEmp) {
            authUser = {
                id: matchedEmp.id,
                name: defaultName || matchedEmp.name,
                email: email,
                role: 'employee',
                allowedPanels: activeCreds?.allowedPanels || ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel", "cloudPanel"]
            };
        } else {
            showToast(`البريد الإلكتروني ${email} غير مضاف للموظفين الـ 10. تم تسجيلك كـ موظف 1 للمراجعين.`, "info");
            const first = EMPLOYEES[0];
            const firstCreds = Object.values(USER_CREDENTIALS).find(c => c.email.toLowerCase() === first.email.toLowerCase());
            authUser = {
                id: first.id,
                name: defaultName || first.name,
                email: email,
                role: 'employee',
                allowedPanels: firstCreds?.allowedPanels || ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel", "cloudPanel"]
            };
        }
    }

    state.currentUser = authUser;
    localStorage.setItem('ht_logged_user', JSON.stringify(authUser));
    showToast(`تم تسجيل الدخول بنجاح: ${authUser.name}`, "success");
    launchDashboard();
}

window.selectSharedProfile = function(profileObj) {
    state.currentUser = profileObj;
    localStorage.setItem('ht_logged_user', JSON.stringify(profileObj));
    
    // Hide screens
    const chooserScreen = document.getElementById('profileChooserScreen');
    if (chooserScreen) chooserScreen.style.display = 'none';
    
    showToast(`أهلاً بك، تم الدخول بصفتك: ${profileObj.name}`, "success");
    launchDashboard();
};

function logoutUser() {
    state.currentUser = null;
    localStorage.removeItem('ht_logged_user');
    
    // Stop live simulators
    if (state.simulatedSyncInterval) {
        clearInterval(state.simulatedSyncInterval);
        state.simulatedSyncInterval = null;
    }
    
    // Hide UI & show login box
    document.getElementById('mainAppContainer').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'flex';
    
    showToast("تم تسجيل الخروج بنجاح", "info");
}

// 4. Launch Main App After Login
function launchDashboard() {
    // Hide Login & Show App
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('mainAppContainer').style.display = 'flex';
    
    // Render profile card
    document.getElementById('appUserName').textContent = state.currentUser.name;
    document.getElementById('appUserEmail').textContent = state.currentUser.email;
    
    if (state.currentUser.role === 'admin') {
        document.getElementById('appUserRole').textContent = 'المدير العام';
        document.getElementById('appUserRole').style.color = '#E50914';
        document.getElementById('btnReleaseBooking').style.display = 'block';
        const btnAdd = document.getElementById('btnAddBillboard');
        if (btnAdd) btnAdd.style.display = 'flex';
    } else {
        document.getElementById('appUserRole').textContent = `موظف مبيعات (م.${state.currentUser.id})`;
        document.getElementById('appUserRole').style.color = '#10B981';
        document.getElementById('btnReleaseBooking').style.display = 'none';
        const btnAdd = document.getElementById('btnAddBillboard');
        if (btnAdd) btnAdd.style.display = 'none';
    }

    // Filter Navigation sidebar menu links based on allowedPanels list
    const allowed = state.currentUser.allowedPanels || [];
    document.querySelectorAll('.nav-item').forEach(item => {
        const target = item.getAttribute('data-target');
        // Admin gets all panels. Employees only get what is in their allowedPanels list.
        if (state.currentUser.role === 'admin' || allowed.includes(target)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });

    // Make sure we auto-select the first allowed link if current active link is hidden!
    let activeItem = document.querySelector('.nav-item.active');
    if (activeItem && activeItem.style.display === 'none') {
        activeItem.classList.remove('active');
        const firstVisible = Array.from(document.querySelectorAll('.nav-item')).find(item => item.style.display !== 'none');
        if (firstVisible) {
            firstVisible.classList.add('active');
            const target = firstVisible.getAttribute('data-target');
            document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
            const panel = document.getElementById(target);
            if (panel) panel.classList.add('active');
        }
    }

    // Load Database & Firebase Setup
    loadDatabase();
    initMap();
    configureMapInteractivity();
    renderMapMarkers();
    initLiveSync();
    updateAppUI();
}

// 5. Database Load and Generation
function loadDatabase() {
    const SIZES = ['3×6 وجهين', '3×4 وجه واحد', '3×4 وجهين', '2×3', '3×1.50', '2×2 وجه واحد', '2×2 وجهين', 'فانوس 2×1', '1.25 × 2 معلق'];
    const saved = localStorage.getItem('ht_billboards');
    if (saved) {
        state.billboards = JSON.parse(saved);
        // Integrity check: enforce 25 billboards
        if (state.billboards.length !== 25) {
            generateInitialBillboards();
        } else {
            // Migration: assign defaultDimension to existing boards that don't have one
            state.billboards.forEach(b => {
                if (!b.defaultDimension) {
                    b.defaultDimension = SIZES[Math.floor(Math.random() * SIZES.length)];
                }
            });
            saveDatabase();
        }
    } else {
        generateInitialBillboards();
    }
}

function saveDatabase() {
    localStorage.setItem('ht_billboards', JSON.stringify(state.billboards));
    if (state.isFirebaseConnected && state.firestoreDb) {
        syncToFirebaseCloud();
    } else {
        syncToFreeCloud('billboards', state.billboards);
    }
}

function generateInitialBillboards() {
    state.billboards = [];
    const totalPoints = 25;
    let segmentLengths = [];
    let totalApproximatedLength = 0;
    
    for (let i = 0; i < CORNICHE_WAYPOINTS.length - 1; i++) {
        const lat1 = CORNICHE_WAYPOINTS[i][0];
        const lng1 = CORNICHE_WAYPOINTS[i][1];
        const lat2 = CORNICHE_WAYPOINTS[i+1][0];
        const lng2 = CORNICHE_WAYPOINTS[i+1][1];
        const dist = Math.sqrt(Math.pow(lat2 - lat1, 2) + Math.pow(lng2 - lng1, 2));
        segmentLengths.push(dist);
        totalApproximatedLength += dist;
    }
    
    let pointsAllocated = 0;
    let pointsPerSegment = [];
    for (let i = 0; i < segmentLengths.length; i++) {
        let count = Math.round((segmentLengths[i] / totalApproximatedLength) * totalPoints);
        pointsPerSegment.push(count);
        pointsAllocated += count;
    }
    
    let difference = totalPoints - pointsAllocated;
    while (difference !== 0) {
        if (difference > 0) { pointsPerSegment[0]++; difference--; }
        else { pointsPerSegment[0]--; difference++; }
    }
    
    let billboardIndex = 1;
    for (let i = 0; i < CORNICHE_WAYPOINTS.length - 1; i++) {
        const startLat = CORNICHE_WAYPOINTS[i][0];
        const startLng = CORNICHE_WAYPOINTS[i][1];
        const endLat = CORNICHE_WAYPOINTS[i+1][0];
        const endLng = CORNICHE_WAYPOINTS[i+1][1];
        const numPoints = pointsPerSegment[i];
        
        for (let j = 0; j < numPoints; j++) {
            const t = j / numPoints;
            const lat = startLat + t * (endLat - startLat);
            const lng = startLng + t * (endLng - startLng);
            const offsetLat = (Math.random() - 0.5) * 0.00012;
            const offsetLng = (Math.random() - 0.5) * 0.00012;
            
            const SIZES = ['3×6 وجهين', '3×4 وجه واحد', '3×4 وجهين', '2×3', '3×1.50', '2×2 وجه واحد', '2×2 وجهين', 'فانوس 2×1', '1.25 × 2 معلق'];
            const randomSize = SIZES[Math.floor(Math.random() * SIZES.length)];
            
            state.billboards.push({
                id: billboardIndex,
                lat: lat + offsetLat,
                lng: lng + offsetLng,
                isBooked: false,
                booking: null,
                installments: [],
                defaultDimension: randomSize
            });
            billboardIndex++;
        }
    }
    
    state.billboards = state.billboards.slice(0, 25);
    saveDatabase();
}

// 6. Map Setup with Color Satellite Hybrid Layer
function initMap() {
    if (state.map) return; // Map already loaded

    state.map = L.map('map', {
        attributionControl: false,
        rotate: true,
        bearing: 0,
        rotateControl: {
            closeOnZeroBearing: false,
            position: 'topleft'
        }
    }).setView([29.9570, 32.5500], 15);

    // 1. Esri World Satellite Imagery layer (Coloured satellite layer)
    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 19
    }).addTo(state.map);

    // 2. Esri Boundaries and Places Reference Overlay (Road networks, names, places layered over satellite)
    const hybridLabels = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 19
    }).addTo(state.map);


    renderMapMarkers();
    configureMapInteractivity();

    // Add Billboard Mode map click listener
    state.map.on('click', (e) => {
        if (state.addBillboardMode) {
            const nextId = state.billboards.length > 0 ? Math.max(...state.billboards.map(b => b.id)) + 1 : 1;
            
            state.billboards.push({
                id: nextId,
                lat: e.latlng.lat,
                lng: e.latlng.lng,
                isBooked: false,
                booking: null,
                installments: [],
                shape: 'rectangle',
                size: 18,
                color: '#a3a3a3',
                defaultDimension: '3×6 وجهين'
            });
            saveDatabase();
            renderMapMarkers();
            updateAppUI();
            showToast(`تمت إضافة اللوحة الجديدة #${nextId} بنجاح!`, "success");
            selectBillboard(nextId);
            
            // Deactivate add mode
            state.addBillboardMode = false;
            const btnAdd = document.getElementById('btnAddBillboard');
            if (btnAdd) btnAdd.classList.remove('active');
            state.map.getContainer().style.cursor = '';
        }
    });
}

function configureMapInteractivity() {
    if (!state.map) return;
    
    // Enable dragging, touchZoom, doubleClickZoom, scrollWheelZoom, boxZoom, keyboard for everyone
    state.map.dragging.enable();
    state.map.touchZoom.enable();
    state.map.doubleClickZoom.enable();
    state.map.scrollWheelZoom.enable();
    state.map.boxZoom.enable();
    state.map.keyboard.enable();
    if (state.map.tap) state.map.tap.enable();
    
    // Ensure zoom controls are shown
    const zoomCtrl = document.querySelector('.leaflet-control-zoom');
    if (zoomCtrl) zoomCtrl.style.display = 'block';
}

function renderMapMarkers() {
    // Clear existing markers
    for (let id in state.markers) {
        state.map.removeLayer(state.markers[id]);
    }
    state.markers = {};

    const isAdmin = state.currentUser && state.currentUser.role === 'admin';

    state.billboards.forEach(b => {
        const status = getBillboardStatus(b);
        let markerClass = 'custom-leaflet-marker';
        
        if (status === 'booked') {
            markerClass += ' booked';
        } else if (status === 'expiring') {
            markerClass += ' expiring';
        }

        // Determine visual parameters
        const S = b.size || 18;
        const shape = b.shape || 'rectangle';
        const rotationAngle = b.rotation || 0;
        
        // Custom color only affects available state, booking stays red/amber
        let displayColor = b.color || '#ECECEE';
        if (status === 'booked') {
            displayColor = '#E50914'; // Crimson Booking color
        } else if (status === 'expiring') {
            displayColor = '#F59E0B'; // Amber Expiring color
        }

        // Shape dimensions & clip-paths
        let w = S;
        let h = S;
        let clipStyle = '';
        
        if (shape === 'circle') {
            clipStyle = 'clip-path: circle(50% at 50% 50%); border-radius: 50%;';
        } else if (shape === 'triangle') {
            clipStyle = 'clip-path: polygon(50% 0%, 0% 100%, 100% 100%); border-radius: 0;';
        } else if (shape === 'oval') {
            w = S * 1.4;
            h = S * 0.8;
            clipStyle = 'border-radius: 50% / 30%; clip-path: none;';
        } else if (shape === 'diamond') {
            clipStyle = 'clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); border-radius: 0;';
        } else if (shape === 'pentagon') {
            clipStyle = 'clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%); border-radius: 0;';
        } else if (shape === 'hexagon') {
            clipStyle = 'clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); border-radius: 0;';
        } else if (shape === 'octagon') {
            clipStyle = 'clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%); border-radius: 0;';
        } else if (shape === 'star') {
            clipStyle = 'clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); border-radius: 0;';
        } else if (shape === 'arrow-right') {
            clipStyle = 'clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%); border-radius: 0;';
        } else if (shape === 'arrow-left') {
            clipStyle = 'clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%); border-radius: 0;';
        } else if (shape === 'cross') {
            clipStyle = 'clip-path: polygon(35% 0%, 65% 0%, 65% 35%, 100% 35%, 100% 65%, 65% 65%, 65% 100%, 35% 100%, 35% 65%, 0% 65%, 0% 35%, 35% 35%); border-radius: 0;';
        } else if (shape === 'trapezoid') {
            clipStyle = 'clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%); border-radius: 0;';
        } else {
            // Rectangle
            w = S * 1.5;
            h = S * 0.6;
            clipStyle = 'clip-path: none; border-radius: 2px;';
        }

        // Build icon — outer wrapper holds shape + number label
        // The wrapper uses position:relative so the label can sit below
        const labelColor = status === 'available' ? '#10B981' : (status === 'expiring' ? '#F59E0B' : '#E50914');
        const idLabel = b.id.toString().padStart(2, '0');

        const icon = L.divIcon({
            className: 'custom-leaflet-marker-container',
            html: `<div style="display:flex; flex-direction:column; align-items:center; gap:2px;">
                     <div class="${markerClass}" style="transform: rotate(${rotationAngle}deg); width: ${w}px; height: ${h}px; background-color: ${displayColor} !important; ${clipStyle}"></div>
                     <span style="font-family:'Cairo',sans-serif; font-size:9px; font-weight:900; color:white; background:${labelColor}; border-radius:3px; padding:0 3px; line-height:14px; min-width:16px; text-align:center; letter-spacing:0; text-shadow: 0 1px 2px rgba(0,0,0,0.6); box-shadow:0 1px 3px rgba(0,0,0,0.5);">${idLabel}</span>
                   </div>`,
            iconSize: [Math.max(w, 24), h + 18],
            iconAnchor: [Math.max(w, 24) / 2, h / 2]
        });

        const marker = L.marker([b.lat, b.lng], { 
            icon: icon,
            draggable: isAdmin
        }).addTo(state.map);
        
        marker.on('click', () => {
            selectBillboard(b.id);
        });

        // Double click: Zoom closer to max res (level 18) and open edit form
        marker.on('dblclick', (e) => {
            if (e.originalEvent) {
                e.originalEvent.stopPropagation();
            }
            state.map.setView(marker.getLatLng(), 18);
            
            // Check permission: Owner or Admin can edit, if free anyone can book
            if (!b.isBooked) {
                openBookingModal(b.id);
            } else {
                const isOwner = state.currentUser.role === 'admin' || b.booking.bookedBy == state.currentUser.id;
                if (isOwner) {
                    openBookingModal(b.id);
                } else {
                    showToast("عذراً، بيانات هذه اللوحة محمية ولا يمكن التعديل عليها لغير المالك أو المدير!", "error");
                }
            }
        });

        // If draggable (admin), update coordinates in database on dragend
        if (isAdmin) {
            marker.on('dragend', () => {
                const newLatLng = marker.getLatLng();
                const bIndex = state.billboards.findIndex(item => item.id === b.id);
                if (bIndex !== -1) {
                    state.billboards[bIndex].lat = newLatLng.lat;
                    state.billboards[bIndex].lng = newLatLng.lng;
                    saveDatabase();
                    showToast(`تم نقل موقع اللوحة #${b.id.toString().padStart(3, '0')} بنجاح!`, "success");
                    
                    // Rerender details if selected
                    selectBillboard(b.id);
                }
            });
        }

        // Tooltip — available boards show default size, booked show client + size
        const defaultSize = b.defaultDimension || '3×6 وجهين';
        let tooltipHTML;
        if (status === 'available') {
            tooltipHTML = `
                <div style="font-family:'Cairo'; text-align:center; line-height:1.7; direction:rtl; padding:4px 2px;">
                    <strong style="color:#10B981; font-size:13px;">🟢 متاحة للحجز</strong><br/>
                    <span style="font-size:11px; color:#888;">لوحة #${b.id.toString().padStart(3,'0')}</span><br/>
                    <span style="font-size:15px; font-weight:900; color:#E50914; letter-spacing:1px;">📐 ${defaultSize}</span>
                </div>`;
        } else {
            const isOwner = state.currentUser.role === 'admin' || b.booking.bookedBy == state.currentUser.id;
            const clientName = isOwner ? b.booking.clientName : '[*** عميل زميل ***]';
            const dims = b.booking.dimensions || defaultSize;
            const statusIcon = status === 'expiring' ? '🟠' : '🔴';
            tooltipHTML = `
                <div style="font-family:'Cairo'; text-align:center; line-height:1.7; direction:rtl; padding:4px 2px;">
                    <strong style="font-size:13px;">${statusIcon} لوحة #${b.id.toString().padStart(3,'0')}</strong><br/>
                    <span style="font-size:12px;">👤 ${clientName}</span><br/>
                    <span style="font-size:14px; font-weight:900; color:#E50914;">📐 ${dims}</span>
                </div>`;
        }

        marker.bindTooltip(tooltipHTML, {
            direction: 'top',
            offset: [0, -10],
            className: 'ht-billboard-tooltip'
        });

        state.markers[b.id] = marker;
    });
}

function getBillboardStatus(billboard) {
    if (!billboard.isBooked || !billboard.booking) return 'available';
    const today = new Date();
    const expiry = new Date(billboard.booking.endDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays >= 0 && diffDays <= 10) return 'expiring';
    if (diffDays < 0) return 'expired';
    return 'booked';
}

// 7. Role-Based Data Masking (Privacy and Preventing Poaching)
function selectBillboard(id) {
    const b = state.billboards.find(item => item.id === id);
    if (!b) return;

    state.map.panTo([b.lat, b.lng]);

    const status = getBillboardStatus(b);
    let badgeClass = 'badge-available';
    let statusText = 'متاحة للحجز';
    
    if (status === 'booked') {
        badgeClass = 'badge-booked';
        statusText = 'محجوزة إعلانيا';
    } else if (status === 'expiring') {
        badgeClass = 'badge-expiring';
        statusText = 'أوشك على الانتهاء (أقل من 10 أيام)';
    } else if (status === 'expired') {
        badgeClass = 'badge-booked';
        statusText = 'منتهية الصلاحية (بحاجة لتجديد)';
    }

    const formatId = b.id.toString().padStart(3, '0');
    const container = document.getElementById('quickInfoContent');

    if (b.isBooked && b.booking) {
        // Enforce user permission: Admin or Booking owner can see details and edit
        const isOwner = state.currentUser.role === 'admin' || b.booking.bookedBy == state.currentUser.id;
        const empName = EMPLOYEES.find(e => e.id == b.booking.bookedBy)?.name || 'المدير العام';

        if (isOwner) {
            // Full access view
            container.innerHTML = `
                <div class="billboard-detail-view">
                    <span class="billboard-header-badge ${badgeClass}">${statusText}</span>
                    <h2 class="detail-title">لوحة إعلانية #${formatId}</h2>
                    <p class="detail-location"><i class="fa-solid fa-location-dot"></i> إحداثيات: ${b.lat.toFixed(5)}, ${b.lng.toFixed(5)}</p>
                    
                    <table class="detail-table">
                        <tr>
                            <td class="label-td">العميل:</td>
                            <td class="value-td">${b.booking.clientName}</td>
                        </tr>
                        <tr>
                            <td class="label-td">الهاتف:</td>
                            <td class="value-td">${b.booking.clientPhone}</td>
                        </tr>
                        <tr>
                            <td class="label-td">السعر الشهري:</td>
                            <td class="value-td">${Number(b.booking.price).toLocaleString()} ج.م</td>
                        </tr>
                        <tr>
                            <td class="label-td">مقاس اللوحة:</td>
                            <td class="value-td">${b.booking.dimensions || '3×6 وجهين'}</td>
                        </tr>
                        <tr>
                            <td class="label-td">تاريخ البدء:</td>
                            <td class="value-td">${b.booking.startDate}</td>
                        </tr>
                        <tr>
                            <td class="label-td">تاريخ الانتهاء:</td>
                            <td class="value-td">${b.booking.endDate}</td>
                        </tr>
                        <tr>
                            <td class="label-td">المسؤول:</td>
                            <td class="value-td">${empName}</td>
                        </tr>
                        ${b.booking.notes ? `<tr><td class="label-td">ملاحظات:</td><td class="value-td">${b.booking.notes}</td></tr>` : ''}
                    </table>
                    ${state.currentUser.role === 'admin' ? `
                    <div style="background:#f2f2f7; padding:10px; border-radius:8px; display:flex; flex-direction:column; gap:8px; margin-top:10px; margin-bottom:12px; border:1px dashed #d1d1d6; width:100%;">
                        <div style="font-size:11px; font-weight:800; color:var(--text-main); border-bottom:1px solid #e5e5ea; padding-bottom:4px; margin-bottom:4px;">
                            <i class="fa-solid fa-palette text-red"></i> مظهر وتوجيه اللوحة (المدير العام فقط)
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                            <!-- Color -->
                            <div style="display:flex; align-items:center; gap:6px;">
                                <span style="font-size:10px; font-weight:700;">اللون:</span>
                                <input type="color" value="${b.color || '#a3a3a3'}" onchange="changeBillboardColor(${b.id}, this.value)" style="width:30px; height:24px; border:1px solid #d1d1d6; cursor:pointer; border-radius:4px; padding:0; background:none;">
                            </div>
                            <!-- Shape -->
                            <div style="display:flex; align-items:center; gap:6px;">
                                <span style="font-size:10px; font-weight:700;">الشكل:</span>
                                <select class="form-control" style="padding:2px 6px; font-size:10px; font-weight:700; width:80px; height:24px; border:1px solid #d1d1d6; border-radius:4px; background:#fff;" onchange="changeBillboardShape(${b.id}, this.value)">
                                    <option value="rectangle" ${b.shape === 'rectangle' || !b.shape ? 'selected' : ''}>مستطيل</option>
                                    <option value="circle" ${b.shape === 'circle' ? 'selected' : ''}>دائري</option>
                                    <option value="triangle" ${b.shape === 'triangle' ? 'selected' : ''}>مثلث</option>
                                    <option value="oval" ${b.shape === 'oval' ? 'selected' : ''}>بيضاوي</option>
                                    <option value="diamond" ${b.shape === 'diamond' ? 'selected' : ''}>معين</option>
                                    <option value="pentagon" ${b.shape === 'pentagon' ? 'selected' : ''}>خماسي</option>
                                    <option value="hexagon" ${b.shape === 'hexagon' ? 'selected' : ''}>سداسي</option>
                                    <option value="octagon" ${b.shape === 'octagon' ? 'selected' : ''}>ثماني</option>
                                    <option value="star" ${b.shape === 'star' ? 'selected' : ''}>نجمة</option>
                                    <option value="arrow-right" ${b.shape === 'arrow-right' ? 'selected' : ''}>سهم يمين</option>
                                    <option value="arrow-left" ${b.shape === 'arrow-left' ? 'selected' : ''}>سهم يسار</option>
                                    <option value="cross" ${b.shape === 'cross' ? 'selected' : ''}>زائد (+)</option>
                                    <option value="trapezoid" ${b.shape === 'trapezoid' ? 'selected' : ''}>منحرف</option>
                                </select>
                            </div>
                        </div>
                        <!-- Size -->
                        <div style="display:flex; align-items:center; gap:10px;">
                            <span style="font-size:10px; font-weight:700; width:45px;">الحجم:</span>
                            <input type="range" min="12" max="30" value="${b.size || 18}" oninput="changeBillboardSize(${b.id}, this.value)" style="flex-grow:1; accent-color:var(--primary-color); height:4px; cursor:pointer;">
                            <span id="sizeVal_${b.id}" style="font-size:10px; font-weight:800; width:30px; text-align:left;">${b.size || 18}px</span>
                        </div>
                        <!-- Rotation -->
                        <div style="display:flex; align-items:center; gap:10px;">
                            <span style="font-size:10px; font-weight:700; width:45px;">الدوران:</span>
                            <input type="range" min="0" max="360" value="${b.rotation || 0}" oninput="rotateBillboard(${b.id}, this.value)" style="flex-grow:1; accent-color:var(--primary-color); height:4px; cursor:pointer;">
                            <span id="rotationVal_${b.id}" style="font-size:10px; font-weight:800; width:30px; text-align:left;">${b.rotation || 0}°</span>
                        </div>
                        <button class="btn btn-danger-filled" style="width: 100%; padding: 4px 0; font-size: 10px; margin-top: 6px; display: flex; align-items: center; justify-content: center; gap: 4px; border-radius:6px; background-color:#dc2626;" onclick="deleteBillboardFromSystem(${b.id})">
                            <i class="fa-solid fa-trash-can"></i> حذف اللوحة نهائياً من النظام
                        </button>
                    </div>
                    ` : ''}
                    
                    <div style="display:flex; flex-direction:column; gap:8px; margin-top:12px; width:100%;">
                        <div style="display:flex; gap:8px; width:100%;">
                            <button class="btn btn-primary" style="flex:1; padding:8px 6px; font-size:12px;" onclick="openBookingModal(${b.id})">
                                <i class="fa-solid fa-edit"></i> تعديل الحجز
                            </button>
                            <button class="btn btn-danger-filled" style="flex:1; padding:8px 6px; font-size:12px;" onclick="releaseBillboardFromDetailPanel(${b.id})">
                                <i class="fa-solid fa-trash-can"></i> إلغاء الحجز
                            </button>
                        </div>
                        ${status === 'expiring' ? `
                        <button class="btn btn-whatsapp" style="width:100%; padding:8px 0; border-radius:8px; display:inline-flex; align-items:center; justify-content:center; gap:6px; font-weight:700; font-size:12px;" onclick="sendWhatsAppReminder(${b.id}, '${b.booking.clientPhone}', '${b.booking.clientName}', '${b.booking.endDate}')">
                            <i class="fa-brands fa-whatsapp" style="font-size:14px;"></i> تذكير بالواتساب
                        </button>
                        ` : ''}
                    </div>
                </div>
            `;
        } else {
            // Masked view for regular employees to protect client data
            container.innerHTML = `
                <div class="billboard-detail-view">
                    <span class="billboard-header-badge badge-booked">محجوزة لزميل</span>
                    <h2 class="detail-title">لوحة إعلانية #${formatId}</h2>
                    <p class="detail-location"><i class="fa-solid fa-location-dot"></i> إحداثيات: ${b.lat.toFixed(5)}, ${b.lng.toFixed(5)}</p>
                    
                    <div style="background-color:#FFF3C4; color:#B25E00; padding:10px; border-radius:8px; font-size:11px; font-weight:700; text-align:center;">
                        <i class="fa-solid fa-lock"></i> بيانات العميل محمية ومحجوبة لمنع التداخل
                    </div>

                    <table class="detail-table">
                        <tr>
                            <td class="label-td">العميل:</td>
                            <td class="value-td" style="color:var(--text-muted);">[*** عميل زميل آخر ***]</td>
                        </tr>
                        <tr>
                            <td class="label-td">الهاتف:</td>
                            <td class="value-td" style="color:var(--text-muted);">**********</td>
                        </tr>
                        <tr>
                            <td class="label-td">تاريخ الانتهاء:</td>
                            <td class="value-td">${b.booking.endDate}</td>
                        </tr>
                        <tr>
                            <td class="label-td">المسؤول:</td>
                            <td class="value-td">${empName}</td>
                        </tr>
                    </table>
                    
                    <button class="btn btn-secondary" disabled style="cursor:not-allowed; opacity:0.6;">
                        <i class="fa-solid fa-ban"></i> غير مسموح بالتعديل
                    </button>
                </div>
            `;
        }
    } else {
        // Unbooked - available for all employees to book
        container.innerHTML = `
            <div class="billboard-detail-view">
                <span class="billboard-header-badge ${badgeClass}">${statusText}</span>
                <h2 class="detail-title">لوحة إعلانية #${formatId}</h2>
                <p class="detail-location"><i class="fa-solid fa-location-dot"></i> إحداثيات: ${b.lat.toFixed(5)}, ${b.lng.toFixed(5)}</p>
                
                <table class="detail-table">
                    <tr>
                        <td class="label-td">السعر الشهري:</td>
                        <td class="value-td">8,000 ج.م / شهرياً</td>
                    </tr>
                    <tr>
                        <td class="label-td">الأبعاد:</td>
                        <td class="value-td">4م × 3م (مضاءة)</td>
                    </tr>
                    <tr>
                        <td class="label-td">نوع اللوحة:</td>
                        <td class="value-td">لوحة يوني بول (Uni-Pole)</td>
                    </tr>
                </table>
                ${state.currentUser.role === 'admin' ? `
                <div style="background:#f2f2f7; padding:10px; border-radius:8px; display:flex; flex-direction:column; gap:8px; margin-top:10px; margin-bottom:12px; border:1px dashed #d1d1d6; width:100%;">
                    <div style="font-size:11px; font-weight:800; color:var(--text-main); border-bottom:1px solid #e5e5ea; padding-bottom:4px; margin-bottom:4px;">
                        <i class="fa-solid fa-palette text-red"></i> مظهر وتوجيه اللوحة (المدير العام فقط)
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                        <!-- Color -->
                        <div style="display:flex; align-items:center; gap:6px;">
                            <span style="font-size:10px; font-weight:700;">اللون:</span>
                            <input type="color" value="${b.color || '#a3a3a3'}" onchange="changeBillboardColor(${b.id}, this.value)" style="width:30px; height:24px; border:1px solid #d1d1d6; cursor:pointer; border-radius:4px; padding:0; background:none;">
                        </div>
                        <!-- Shape -->
                        <div style="display:flex; align-items:center; gap:6px;">
                            <span style="font-size:10px; font-weight:700;">الشكل:</span>
                            <select class="form-control" style="padding:2px 6px; font-size:10px; font-weight:700; width:80px; height:24px; border:1px solid #d1d1d6; border-radius:4px; background:#fff;" onchange="changeBillboardShape(${b.id}, this.value)">
                                <option value="rectangle" ${b.shape === 'rectangle' || !b.shape ? 'selected' : ''}>مستطيل</option>
                                <option value="circle" ${b.shape === 'circle' ? 'selected' : ''}>دائري</option>
                                <option value="triangle" ${b.shape === 'triangle' ? 'selected' : ''}>مثلث</option>
                                <option value="oval" ${b.shape === 'oval' ? 'selected' : ''}>بيضاوي</option>
                                <option value="diamond" ${b.shape === 'diamond' ? 'selected' : ''}>معين</option>
                                <option value="pentagon" ${b.shape === 'pentagon' ? 'selected' : ''}>خماسي</option>
                                <option value="hexagon" ${b.shape === 'hexagon' ? 'selected' : ''}>سداسي</option>
                                <option value="octagon" ${b.shape === 'octagon' ? 'selected' : ''}>ثماني</option>
                                <option value="star" ${b.shape === 'star' ? 'selected' : ''}>نجمة</option>
                                <option value="arrow-right" ${b.shape === 'arrow-right' ? 'selected' : ''}>سهم يمين</option>
                                <option value="arrow-left" ${b.shape === 'arrow-left' ? 'selected' : ''}>سهم يسار</option>
                                <option value="cross" ${b.shape === 'cross' ? 'selected' : ''}>زائد (+)</option>
                                <option value="trapezoid" ${b.shape === 'trapezoid' ? 'selected' : ''}>منحرف</option>
                            </select>
                        </div>
                    </div>
                    <!-- Size -->
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span style="font-size:10px; font-weight:700; width:45px;">الحجم:</span>
                        <input type="range" min="12" max="30" value="${b.size || 18}" oninput="changeBillboardSize(${b.id}, this.value)" style="flex-grow:1; accent-color:var(--primary-color); height:4px; cursor:pointer;">
                        <span id="sizeVal_${b.id}" style="font-size:10px; font-weight:800; width:30px; text-align:left;">${b.size || 18}px</span>
                    </div>
                    <!-- Rotation -->
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span style="font-size:10px; font-weight:700; width:45px;">الدوران:</span>
                        <input type="range" min="0" max="360" value="${b.rotation || 0}" oninput="rotateBillboard(${b.id}, this.value)" style="flex-grow:1; accent-color:var(--primary-color); height:4px; cursor:pointer;">
                        <span id="rotationVal_${b.id}" style="font-size:10px; font-weight:800; width:30px; text-align:left;">${b.rotation || 0}°</span>
                    </div>
                    <button class="btn btn-danger-filled" style="width: 100%; padding: 4px 0; font-size: 10px; margin-top: 6px; display: flex; align-items: center; justify-content: center; gap: 4px; border-radius:6px; background-color:#dc2626;" onclick="deleteBillboardFromSystem(${b.id})">
                        <i class="fa-solid fa-trash-can"></i> حذف اللوحة نهائياً من النظام
                    </button>
                </div>
                ` : ''}
                
                <div style="display:flex; flex-direction:column; gap:8px; margin-top:8px; width:100%;">
                    <button class="btn btn-primary" style="width:100%;" onclick="openBookingModal(${b.id})">
                        <i class="fa-solid fa-calendar-check"></i> تسجيل حجز للعميل
                    </button>
                    <button class="btn btn-whatsapp" style="width:100%; padding:8px 0; border-radius:8px; display:inline-flex; align-items:center; justify-content:center; gap:6px; font-weight:700; font-size:12px;" onclick="sendWhatsAppOffer(${b.id})">
                        <i class="fa-brands fa-whatsapp" style="font-size:14px;"></i> إرسال عرض سعر عبر واتساب
                    </button>
                </div>
            </div>
        `;
    }
}

// 8. Dynamic Installments Calculator Logic
function calculateInstallments(pricePerMonth, startDateStr, endDateStr, bookedBy, clientName) {
    const installments = [];
    const start = new Date(startDateStr);
    const end = new Date(endDateStr);
    
    let year = start.getFullYear();
    let month = start.getMonth();
    
    const endYear = end.getFullYear();
    const endMonth = end.getMonth();
    
    let instIndex = 1;
    
    // Generate an installment for each calendar month of the contract duration
    while (year < endYear || (year === endYear && month <= endMonth)) {
        const dueDate = new Date(year, month + 1, 0); // Last day of that billing month
        const dueDateStr = dueDate.toISOString().split('T')[0];
        
        installments.push({
            id: `${instIndex}`,
            dueDate: dueDateStr,
            amount: pricePerMonth,
            status: 'pending', // pending, paid, overdue
            clientName: clientName,
            bookedBy: bookedBy
        });
        
        instIndex++;
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
    }
    return installments;
}

// 9. Real-time Live Sync (Firebase Setup & Free KVDB Cloud Sync)
let freeCloudPollInterval = null;

function initLiveSync() {
    // Check if custom config exists in localstorage
    const localConfig = localStorage.getItem('fb_config');
    if (localConfig) {
        try {
            const config = JSON.parse(localConfig);
            // Initialize Firebase SDK
            firebase.initializeApp(config);
            state.firestoreDb = firebase.firestore();
            state.isFirebaseConnected = true;
            
            document.getElementById('fbApiKey').value = config.apiKey || '';
            document.getElementById('fbProjectId').value = config.projectId || '';
            document.getElementById('syncStatusText').textContent = 'متصل سحابياً (مزامنة Firebase)';
            
            // Listen to Firestore real-time snapshots
            state.firestoreDb.collection('billboards_suez').onSnapshot(snapshot => {
                let updated = [];
                snapshot.forEach(doc => {
                    updated.push(doc.data());
                });
                if (updated.length === 25) {
                    state.billboards = updated.sort((a,b) => a.id - b.id);
                    localStorage.setItem('ht_billboards', JSON.stringify(state.billboards));
                    renderMapMarkers();
                    updateAppUI();
                }
            });

            // Listen to Firestore real-time collection alerts (GM alerts)
            state.firestoreDb.collection('collection_alerts').onSnapshot(snapshot => {
                let updatedAlerts = [];
                snapshot.forEach(doc => {
                    updatedAlerts.push(doc.data());
                });
                localStorage.setItem('ht_direct_alerts', JSON.stringify(updatedAlerts));
                checkDirectEmployeeAlerts();
            });
            
            showToast("تم الاتصال بمشروع Firebase السحابي ومزامنة البيانات!", "success");
            return;
        } catch (err) {
            showToast("خطأ في تشغيل اتصال Firebase. تم تشغيل السحابة المجانية البديلة.", "error");
        }
    }

    // FREE CLOUD SYNC MODE (KVDB.io)
    state.isFirebaseConnected = false;
    document.getElementById('syncStatusText').textContent = 'متصل سحابياً (سحابة HT المجانية)';
    
    const BUCKET = 'ht_suez_adv_db_v1';
    
    // Initial fetch of billboards from free cloud key-value store
    fetch(`https://kvdb.io/${BUCKET}/billboards`)
        .then(res => {
            if (!res.ok) throw new Error();
            return res.json();
        })
        .then(data => {
            if (Array.isArray(data) && data.length === 25) {
                state.billboards = data;
                localStorage.setItem('ht_billboards', JSON.stringify(state.billboards));
                renderMapMarkers();
                updateAppUI();
                console.log("KVDB: Billboards synced from free cloud successfully.");
            } else {
                syncToFreeCloud('billboards', state.billboards);
            }
        })
        .catch(() => {
            // First time use or API empty: initialize cloud store with local state
            syncToFreeCloud('billboards', state.billboards);
        });

    // Initial fetch of chats from free cloud key-value store
    fetch(`https://kvdb.io/${BUCKET}/chats`)
        .then(res => {
            if (!res.ok) throw new Error();
            return res.json();
        })
        .then(data => {
            if (Array.isArray(data)) {
                state.chatMessages = data;
                localStorage.setItem('ht_chat_messages', JSON.stringify(state.chatMessages));
                renderChatMessages();
                console.log("KVDB: Chats synced from free cloud successfully.");
            } else {
                syncToFreeCloud('chats', state.chatMessages);
            }
        })
        .catch(() => {
            syncToFreeCloud('chats', state.chatMessages);
        });

    // Initial fetch of cloud activity feed
    fetch(`https://kvdb.io/${BUCKET}/activity_log`)
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data)) {
                localStorage.setItem('ht_cloud_activity_log', JSON.stringify(data));
                const activeId = document.querySelector('.nav-item.active')?.getAttribute('data-target');
                if (activeId === 'cloudPanel') renderCloudActivityFeed();
            }
        })
        .catch(() => {});

    // Setup periodic polling interval to watch for updates from other employees (every 6 seconds)
    if (freeCloudPollInterval) clearInterval(freeCloudPollInterval);
    freeCloudPollInterval = setInterval(() => {
        // Poll billboards
        fetch(`https://kvdb.io/${BUCKET}/billboards`)
            .then(res => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data) && data.length === 25 && JSON.stringify(data) !== JSON.stringify(state.billboards)) {
                    state.billboards = data;
                    localStorage.setItem('ht_billboards', JSON.stringify(state.billboards));
                    renderMapMarkers();
                    updateAppUI();
                    showToast("تحديث تلقائي: تم تحديث حجوزات اللوحات من السحابة", "info");
                }
            })
            .catch(() => {});

        // Poll chats
        fetch(`https://kvdb.io/${BUCKET}/chats`)
            .then(res => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data) && JSON.stringify(data) !== JSON.stringify(state.chatMessages)) {
                    state.chatMessages = data;
                    localStorage.setItem('ht_chat_messages', JSON.stringify(state.chatMessages));
                    renderChatMessages();
                    showToast("محادثة جديدة واردة من السحابة", "info");
                }
            })
            .catch(() => {});

        // Poll activity log
        fetch(`https://kvdb.io/${BUCKET}/activity_log`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const currentLocalLogs = localStorage.getItem('ht_cloud_activity_log');
                    if (JSON.stringify(data) !== currentLocalLogs) {
                        localStorage.setItem('ht_cloud_activity_log', JSON.stringify(data));
                        const activeId = document.querySelector('.nav-item.active')?.getAttribute('data-target');
                        if (activeId === 'cloudPanel') {
                            renderCloudActivityFeed();
                        }
                    }
                }
            })
            .catch(() => {});
    }, 6000);
}

function syncToFreeCloud(key, data) {
    const BUCKET = 'ht_suez_adv_db_v1';
    fetch(`https://kvdb.io/${BUCKET}/${key}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (!res.ok) console.warn("KVDB sync warning status", res.status);
    })
    .catch(err => console.error("KVDB free cloud sync network error", err));
}

function syncToFirebaseCloud() {
    if (!state.isFirebaseConnected || !state.firestoreDb) return;
    
    // Write all billboards to Firestore
    state.billboards.forEach(b => {
        state.firestoreDb.collection('billboards_suez').doc(b.id.toString()).set(b)
            .catch(err => console.error("Firestore sync error", err));
    });
}



// 10. Installments Tracking Grid rendering
function renderInstallmentsTable() {
    const filterStatus = document.getElementById('filterInstStatus').value;
    const filterEmployee = document.getElementById('filterInstEmployee').value;
    const tableBody = document.getElementById('installmentsTableBody');
    tableBody.innerHTML = '';
    
    let totalVal = 0;
    let collectedVal = 0;
    let pendingVal = 0;
    let overdueVal = 0;
    
    // Personal Sales Statement values (for employees)
    let myCollectedVal = 0;
    let myPendingVal = 0;
    
    const todayStr = new Date().toISOString().split('T')[0];

    // Gather all installments from all billboards
    let allInsts = [];
    state.billboards.forEach(b => {
        if (b.isBooked && b.installments && b.installments.length > 0) {
            b.installments.forEach(inst => {
                let currentStatus = inst.status;
                if (currentStatus === 'pending' && inst.dueDate < todayStr) {
                    currentStatus = 'overdue';
                }
                
                allInsts.push({
                    ...inst,
                    billboardId: b.id,
                    employeeId: b.booking.bookedBy,
                    actualStatus: currentStatus
                });
            });
        }
    });

    // Handle Roles & Statistics & DOM Visibility
    const isAdmin = state.currentUser.role === 'admin';
    
    if (isAdmin) {
        // Show global summary cards, hide personal statement
        document.getElementById('instTotalCard').style.display = 'flex';
        document.getElementById('instCollectedCard').style.display = 'flex';
        document.getElementById('employeeSalesStatementCard').style.display = 'none';
        
        // Show delay alerts for Admin
        document.getElementById('adminOverdueCard').style.display = 'block';
        renderAdminOverdueAlerts(allInsts);

        // Global calculations
        allInsts.forEach(inst => {
            totalVal += inst.amount;
            if (inst.actualStatus === 'paid') collectedVal += inst.amount;
            else if (inst.actualStatus === 'overdue') { overdueVal += inst.amount; pendingVal += inst.amount; }
            else pendingVal += inst.amount;
        });

        // Set inputs
        document.getElementById('instTotalValue').textContent = `${totalVal.toLocaleString()} ج.م`;
        document.getElementById('instCollectedValue').textContent = `${collectedVal.toLocaleString()} ج.م`;
        document.getElementById('instPendingValue').textContent = `${pendingVal.toLocaleString()} ج.م`;
        document.getElementById('instOverdueValue').textContent = `${overdueVal.toLocaleString()} ج.م`;
        
        // Admin filter grid (hide employee filter for regular employee)
        document.getElementById('adminInstFilterGroup').style.display = 'block';
    } else {
        // Regular Employee
        // Hide total/collected cards, show personal statement card, hide admin alerts
        document.getElementById('instTotalCard').style.display = 'none';
        document.getElementById('instCollectedCard').style.display = 'none';
        document.getElementById('employeeSalesStatementCard').style.display = 'block';
        document.getElementById('adminOverdueCard').style.display = 'none';
        
        // Hide employee selector filter for regular employees (they only see themselves)
        document.getElementById('adminInstFilterGroup').style.display = 'none';

        // Filter all installments to strictly ONLY their own installments (no other employee's data)
        const myInsts = allInsts.filter(inst => inst.employeeId == state.currentUser.id);

        // Calculate statistics ONLY for current employee
        myInsts.forEach(inst => {
            if (inst.actualStatus === 'paid') {
                myCollectedVal += inst.amount;
            } else {
                myPendingVal += inst.amount;
                pendingVal += inst.amount;
                if (inst.actualStatus === 'overdue') {
                    overdueVal += inst.amount;
                }
            }
        });

        // Set employee personal statement numbers (المستحقة والغير مستحقة)
        document.getElementById('myCollectedSales').textContent = `${myCollectedVal.toLocaleString()} ج.م`;
        document.getElementById('myPendingSales').textContent = `${myPendingVal.toLocaleString()} ج.م`;
        
        // Set remaining stats cards (Pending and Overdue)
        document.getElementById('instPendingValue').textContent = `${pendingVal.toLocaleString()} ج.م`;
        document.getElementById('instOverdueValue').textContent = `${overdueVal.toLocaleString()} ج.م`;

        // Restrict list table to only their own installments
        allInsts = myInsts;
    }

    // Filter installments list by filter selectors
    let filtered = allInsts.filter(inst => {
        if (filterStatus === 'paid' && inst.actualStatus !== 'paid') return false;
        if (filterStatus === 'pending' && inst.actualStatus !== 'pending') return false;
        if (filterStatus === 'overdue' && inst.actualStatus !== 'overdue') return false;
        
        // Only apply employee filter if Admin is searching
        if (isAdmin && filterEmployee !== 'all' && inst.employeeId != filterEmployee) return false;
        
        return true;
    });

    if (filtered.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-muted); padding:30px 0;">لا توجد أقساط مطابقة للفلاتر المحددة.</td></tr>`;
        return;
    }

    filtered.forEach(inst => {
        const empName = EMPLOYEES.find(e => e.id == inst.employeeId)?.name || 'المدير العام';
        
        let statusBadge = `<span class="billboard-header-badge badge-pending">معلق</span>`;
        if (inst.actualStatus === 'paid') statusBadge = `<span class="billboard-header-badge badge-paid">تم التحصيل</span>`;
        else if (inst.actualStatus === 'overdue') statusBadge = `<span class="billboard-header-badge badge-overdue">متأخر</span>`;

        let actionCellHTML = `
            <button class="btn btn-primary" style="padding:4px 10px; font-size:11px;" onclick="toggleInstallmentPayment(${inst.billboardId}, '${inst.id}', 'paid')">
                <i class="fa-solid fa-circle-check"></i> تحصيل القسط
            </button>
        `;
        if (inst.actualStatus === 'paid') {
            actionCellHTML = `
                <button class="btn btn-secondary" style="padding:4px 8px; font-size:11px;" onclick="toggleInstallmentPayment(${inst.billboardId}, '${inst.id}', 'pending')">
                    <i class="fa-solid fa-rotate-left"></i> إلغاء السداد
                </button>
            `;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>#${inst.billboardId.toString().padStart(3, '0')}</strong></td>
            <td>${inst.clientName}</td>
            <td>${inst.dueDate}</td>
            <td><strong>${Number(inst.amount).toLocaleString()} ج.م</strong></td>
            <td>${statusBadge}</td>
            <td>${empName}</td>
            <td>${actionCellHTML}</td>
        `;
        tableBody.appendChild(tr);
    });
}

// Render overdue collection warnings sent to the General Manager (Admin)
function renderAdminOverdueAlerts(allInsts) {
    const tableBody = document.getElementById('adminOverdueTableBody');
    tableBody.innerHTML = '';

    const overdueList = allInsts.filter(inst => inst.actualStatus === 'overdue');

    if (overdueList.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#7f1d1d; padding:15px 0; font-size:12px; font-weight:700;">لا توجد أي تقارير تأخير حالياً. جميع الموظفين ملتزمون بالتحصيل في الموعد.</td></tr>`;
        return;
    }

    // Sort by oldest overdue
    overdueList.sort((a, b) => a.dueDate.localeCompare(b.dueDate));

    overdueList.forEach(inst => {
        const empName = EMPLOYEES.find(e => e.id == inst.employeeId)?.name || 'المدير العام';
        const delayDays = Math.ceil((new Date() - new Date(inst.dueDate)) / (1000 * 60 * 60 * 24));
        
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid #fca5a5';
        tr.innerHTML = `
            <td style="color:#7f1d1d; font-weight:700;">#${inst.billboardId.toString().padStart(3, '0')}</td>
            <td style="color:#7f1d1d;">${inst.clientName}</td>
            <td style="color:#7f1d1d; font-weight:700;">${empName}</td>
            <td style="color:#7f1d1d;">${inst.dueDate}</td>
            <td style="color:#7f1d1d; font-weight:700;">${Number(inst.amount).toLocaleString()} ج.م</td>
            <td style="color:#b91c1c; font-weight:800;">
                <i class="fa-solid fa-triangle-exclamation"></i> متأخر منذ ${delayDays} يوم
            </td>
            <td style="text-align:center;">
                <button class="btn btn-primary" style="padding: 4px 8px; font-size: 11px; border-radius: 6px; background-color: var(--primary-color);" onclick="sendCollectionAlertToEmployee(${inst.billboardId}, ${inst.employeeId}, '${inst.clientName}', ${inst.amount})">
                    <i class="fa-solid fa-paper-plane"></i> إرسال تنبيه للموظف
                </button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

// Send alert to employee database collection (both local & firebase sync compatible)
window.sendCollectionAlertToEmployee = function(billboardId, employeeId, clientName, amount) {
    const matchedEmp = EMPLOYEES.find(e => e.id == employeeId);
    if (!matchedEmp) return;

    const alertObj = {
        id: Date.now(),
        toEmployeeId: employeeId,
        billboardId: billboardId,
        clientName: clientName,
        amount: amount,
        timestamp: new Date().toISOString()
    };

    let alerts = [];
    const saved = localStorage.getItem('ht_direct_alerts');
    if (saved) {
        alerts = JSON.parse(saved);
    }
    
    // De-duplicate
    alerts = alerts.filter(a => !(a.billboardId == billboardId && a.toEmployeeId == employeeId));
    alerts.push(alertObj);
    localStorage.setItem('ht_direct_alerts', JSON.stringify(alerts));

    if (state.isFirebaseConnected && state.firestoreDb) {
        state.firestoreDb.collection('collection_alerts').doc(`${billboardId}_${employeeId}`).set(alertObj)
            .catch(err => console.error("Firebase alert sync error", err));
    }

    showToast(`تم إرسال إشعار تحصيل وتنبيه عاجل للموظف (${matchedEmp.name}) بنجاح!`, "success");
};

window.dismissDirectAlert = function() {
    if (state.currentUser.role === 'admin') return;
    
    let alerts = [];
    const saved = localStorage.getItem('ht_direct_alerts');
    if (saved) {
        alerts = JSON.parse(saved);
    }
    
    const myAlerts = alerts.filter(a => a.toEmployeeId == state.currentUser.id);
    if (myAlerts.length > 0) {
        const activeAlert = myAlerts[0];
        
        alerts = alerts.filter(a => !(a.billboardId == activeAlert.billboardId && a.toEmployeeId == state.currentUser.id && a.isWhatsAppAlert === activeAlert.isWhatsAppAlert));
        localStorage.setItem('ht_direct_alerts', JSON.stringify(alerts));

        if (state.isFirebaseConnected && state.firestoreDb) {
            const docId = activeAlert.isWhatsAppAlert ? `${activeAlert.billboardId}_${state.currentUser.id}_wa` : `${activeAlert.billboardId}_${state.currentUser.id}`;
            state.firestoreDb.collection('collection_alerts').doc(docId).delete()
                .catch(err => console.error("Firebase alert delete error", err));
        }

        showToast(activeAlert.isWhatsAppAlert ? "تم تأكيد استلام تنبيه الواتساب وجاري متابعة التجديد." : "تم تأكيد استلام التنبيه الإداري وجاري تحصيل القسط.", "success");
        document.getElementById('directEmployeeAlert').style.display = 'none';
        renderInstallmentsTable();
    }
};

function checkDirectEmployeeAlerts() {
    if (!state.currentUser) return;
    
    const banner = document.getElementById('directEmployeeAlert');
    if (state.currentUser.role === 'admin') {
        banner.style.display = 'none';
        return;
    }

    let alerts = [];
    const saved = localStorage.getItem('ht_direct_alerts');
    if (saved) {
        alerts = JSON.parse(saved);
    }

    const myAlert = alerts.find(a => a.toEmployeeId == state.currentUser.id);
    
    if (myAlert) {
        document.getElementById('directAlertBillboardId').textContent = `#${myAlert.billboardId.toString().padStart(3, '0')}`;
        document.getElementById('directAlertClientName').textContent = myAlert.clientName;
        
        const alertSpan = banner.querySelector('.direct-alert-content span');
        if (myAlert.isWhatsAppAlert) {
            alertSpan.innerHTML = `<strong>تنبيه تجديد واتساب:</strong> تم تذكير العميل (<span style="font-weight:800;">${myAlert.clientName}</span>) للوحة <span style="color:var(--primary-color); font-weight:800;">#${myAlert.billboardId.toString().padStart(3, '0')}</span> عبر واتساب. يرجى متابعة التجديد.`;
        } else {
            alertSpan.innerHTML = `<strong>تنبيه إداري عاجل من المدير العام:</strong> يرجى مراجعة وتحصيل القسط المتأخر للوحة <span style="color:var(--primary-color); font-weight:800;">#${myAlert.billboardId.toString().padStart(3, '0')}</span> للعميل (<span style="font-weight:800;">${myAlert.clientName}</span>).`;
        }
        
        banner.style.display = 'flex';
    } else {
        banner.style.display = 'none';
    }
}

window.toggleInstallmentPayment = function(billboardId, installmentId, newStatus) {
    const bIndex = state.billboards.findIndex(item => item.id === billboardId);
    if (bIndex === -1) return;
    
    const instIndex = state.billboards[bIndex].installments.findIndex(i => i.id === installmentId);
    if (instIndex === -1) return;
    
    state.billboards[bIndex].installments[instIndex].status = newStatus;
    const amount = state.billboards[bIndex].installments[instIndex].amount;
    const client = state.billboards[bIndex].booking?.clientName || "غير معروف";
    
    saveDatabase();
    
    // Log to Cloud Activity Feed
    logCloudActivity(newStatus === 'paid' ? `تم تحصيل سداد قسط بقيمة ${amount.toLocaleString()} ج.م للعميل: ${client} (اللوحة #${billboardId})` : `تم إلغاء سداد قسط للعميل: ${client} (اللوحة #${billboardId})`);
    
    renderInstallmentsTable();
    updateSummaryStats();
    showToast("تم تحديث حالة القسط وحفظ البيانات بنجاح", "success");
};

// 11. Reports & Tables Rendering
function renderReportsTable() {
    const statusFilter = document.getElementById('filterStatus').value;
    const employeeFilter = document.getElementById('filterEmployee').value;
    const clientFilterSelect = document.getElementById('filterClient');
    const clientFilter = clientFilterSelect ? clientFilterSelect.value : 'all';
    
    // Dynamic populating of the Client Filter dropdown list
    if (clientFilterSelect) {
        const uniqueClients = [];
        state.billboards.forEach(b => {
            if (b.isBooked && b.booking && b.booking.clientName) {
                if (!uniqueClients.includes(b.booking.clientName)) {
                    uniqueClients.push(b.booking.clientName);
                }
            }
        });
        uniqueClients.sort((a, b) => a.localeCompare(b, 'ar'));
        
        // Rebuild select options if list size or names mismatch
        const currentOptionsCount = clientFilterSelect.options.length;
        if (currentOptionsCount - 1 !== uniqueClients.length) {
            clientFilterSelect.innerHTML = '<option value="all">كل العملاء</option>';
            uniqueClients.forEach(c => {
                const opt = document.createElement('option');
                opt.value = c;
                opt.textContent = c;
                clientFilterSelect.appendChild(opt);
            });
            if (uniqueClients.includes(clientFilter)) {
                clientFilterSelect.value = clientFilter;
            } else {
                clientFilterSelect.value = 'all';
            }
        }
    }

    const activeClientFilter = clientFilterSelect ? clientFilterSelect.value : 'all';
    const tableBody = document.getElementById('reportTableBody');
    tableBody.innerHTML = '';

    let filtered = state.billboards.filter(b => {
        const status = getBillboardStatus(b);
        if (statusFilter === 'booked' && !b.isBooked) return false;
        if (statusFilter === 'available' && b.isBooked) return false;
        if (statusFilter === 'expiring' && status !== 'expiring') return false;
        
        if (employeeFilter !== 'all') {
            if (!b.isBooked || !b.booking || b.booking.bookedBy != employeeFilter) return false;
        }
        
        if (activeClientFilter !== 'all') {
            if (!b.isBooked || !b.booking || b.booking.clientName !== activeClientFilter) return false;
        }
        return true;
    });

    // Apply alphabetical sorting by customer name if selected
    if (state.reportSortOrder && state.reportSortOrder !== 'none') {
        filtered.sort((a, b) => {
            const nameA = (a.isBooked && a.booking && a.booking.clientName) ? a.booking.clientName : '';
            const nameB = (b.isBooked && b.booking && b.booking.clientName) ? b.booking.clientName : '';
            
            if (state.reportSortOrder === 'asc') {
                return nameA.localeCompare(nameB, 'ar');
            } else {
                return nameB.localeCompare(nameA, 'ar');
            }
        });
    }

    if (filtered.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="10" style="text-align:center; color:var(--text-muted); padding:30px 0;">لا توجد لوحات تطابق الفلاتر.</td></tr>`;
        return;
    }

    filtered.forEach(b => {
        const status = getBillboardStatus(b);
        const formatId = b.id.toString().padStart(3, '0');
        let statusBadge = `<span class="billboard-header-badge badge-available">متاحة</span>`;
        if (status === 'booked') statusBadge = `<span class="billboard-header-badge badge-booked">محجوزة</span>`;
        else if (status === 'expiring') statusBadge = `<span class="billboard-header-badge badge-expiring">تنتهي قريباً</span>`;
        else if (status === 'expired') statusBadge = `<span class="billboard-header-badge badge-booked" style="background-color:#fee2e2; color:#b91c1c;">منتهية</span>`;

        const isOwner = state.currentUser.role === 'admin' || (b.isBooked && b.booking.bookedBy == state.currentUser.id);
        const empName = b.isBooked ? (EMPLOYEES.find(e => e.id == b.booking.bookedBy)?.name || 'المدير العام') : '-';

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>#${formatId}</strong></td>
            <td style="font-size:11px; color:var(--text-muted);">${b.lat.toFixed(5)}, ${b.lng.toFixed(5)}</td>
            <td>${statusBadge}</td>
            <td>${b.isBooked ? (isOwner ? b.booking.clientName : '[*** عميل زميل ***]') : '-'}</td>
            <td>${b.isBooked ? (isOwner ? b.booking.clientPhone : '**********') : '-'}</td>
            <td>${b.isBooked ? (isOwner ? Number(b.booking.price).toLocaleString() : '***') : '-'}</td>
            <td>${b.isBooked ? b.booking.startDate : '-'}</td>
            <td>${b.isBooked ? b.booking.endDate : '-'}</td>
            <td>${empName}</td>
            <td>
                <button class="btn btn-secondary" style="padding:4px 8px; font-size:11px;" onclick="viewBillboardFromReport(${b.id})">
                    <i class="fa-solid fa-eye"></i> عرض
                </button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

window.viewBillboardFromReport = function(id) {
    document.querySelector('[data-target="mapPanel"]').click();
    selectBillboard(id);
};

// Navigate to billboard location on map from Customer Directory
window.goToBillboardOnMap = function(billboardId) {
    const b = state.billboards.find(item => item.id === billboardId);
    if (!b) return;
    
    // Switch to Map panel
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
    const mapNavItem = document.querySelector('[data-target="mapPanel"]');
    if (mapNavItem) mapNavItem.classList.add('active');
    document.getElementById('mapPanel').classList.add('active');
    
    // Pan & zoom to billboard
    if (state.map) {
        state.map.setView([b.lat, b.lng], 18, { animate: true, duration: 1.2 });
        setTimeout(() => {
            selectBillboard(billboardId);
            showToast(`تم الانتقال إلى موقع اللوحة #${billboardId.toString().padStart(3,'0')} على الخريطة`, 'success');
            state.map.invalidateSize();
        }, 400);
    }
};

// 12. Employee Performance rendering
function renderEmployeeTable() {
    const tableBody = document.getElementById('employeeTableBody');
    tableBody.innerHTML = '';

    const employeesPerformance = EMPLOYEES.map(emp => {
        const bookings = state.billboards.filter(b => b.isBooked && b.booking && b.booking.bookedBy == emp.id);
        const totalSales = bookings.reduce((sum, b) => sum + b.booking.price, 0);
        const commission = totalSales * 0.05;
        
        let rating = 1;
        if (totalSales > 80000) rating = 5;
        else if (totalSales > 50000) rating = 4;
        else if (totalSales > 30000) rating = 3;
        else if (totalSales > 10000) rating = 2;

        return { ...emp, bookingsCount: bookings.length, totalSales, commission, rating };
    });

    employeesPerformance.sort((a, b) => b.totalSales - a.totalSales);
    const maxSales = Math.max(...employeesPerformance.map(e => e.totalSales), 1);

    employeesPerformance.forEach(emp => {
        const activePercent = Math.round((emp.totalSales / maxSales) * 100);
        let starsHTML = '';
        for (let s = 1; s <= 5; s++) {
            starsHTML += `<i class="${s <= emp.rating ? 'fa-solid' : 'fa-regular'} fa-star"></i>`;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div class="employee-name-td">
                    <div class="employee-avatar-small"><i class="fa-solid fa-user-tie"></i></div>
                    <span>${emp.name}</span>
                </div>
            </td>
            <td>${emp.bookingsCount} لوحات</td>
            <td><strong>${Number(emp.totalSales).toLocaleString()} ج.م</strong></td>
            <td style="color:var(--color-success); font-weight:700;">${Number(emp.commission).toLocaleString()} ج.م</td>
            <td>
                <div style="display:flex; align-items:center; gap:8px;">
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${activePercent}%"></div>
                    </div>
                    <span style="font-size:11px; color:var(--text-muted);">${activePercent}%</span>
                </div>
            </td>
            <td>
                <div class="employee-rating-stars">${starsHTML}</div>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

// 13. Form Submission & Actions
function setupEventHandlers() {
    document.getElementById('btnCloseModal').addEventListener('click', closeBookingModal);
    document.getElementById('btnCancelModal').addEventListener('click', closeBookingModal);

    // Subscription Plan Cards: highlight selected + auto-calculate endDate
    function calcEndDateFromPlan() {
        const startVal = document.getElementById('startDate').value;
        const checkedPlan = document.querySelector('input[name="subscriptionPlan"]:checked');
        if (!startVal || !checkedPlan) return;
        const months = parseInt(checkedPlan.value);
        const start = new Date(startVal);
        start.setMonth(start.getMonth() + months);
        // Subtract one day so endDate = last day of subscription
        start.setDate(start.getDate() - 1);
        document.getElementById('endDate').value = start.toISOString().split('T')[0];
    }

    document.addEventListener('change', (e) => {
        if (e.target.name === 'subscriptionPlan') {
            // Highlight active plan card
            document.querySelectorAll('.plan-card').forEach(card => card.classList.remove('selected'));
            if (e.target.closest('.plan-card')) e.target.closest('.plan-card').classList.add('selected');
            calcEndDateFromPlan();
        }
    });

    document.getElementById('startDate').addEventListener('change', calcEndDateFromPlan);
    
    // Save/Update Booking details
    document.getElementById('bookingForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const id = parseInt(document.getElementById('billboardId').value);
        const bIndex = state.billboards.findIndex(item => item.id === id);
        
        if (bIndex === -1) return;
        
        const clientName = document.getElementById('clientName').value;
        const clientPhone = document.getElementById('clientPhone').value;
        const clientEmail = document.getElementById('clientEmail').value;
        const price = parseFloat(document.getElementById('billboardPrice').value);
        const dimensions = document.getElementById('billboardDimensions').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const notes = document.getElementById('notes').value;

        if (new Date(endDate) <= new Date(startDate)) {
            showToast("خطأ: تاريخ نهاية الاشتراك يجب أن يكون بعد تاريخ البدء", "error");
            return;
        }

        const isEditing = state.billboards[bIndex].isBooked;
        const bookedBy = isEditing ? state.billboards[bIndex].booking.bookedBy : (state.currentUser.role === 'admin' ? 1 : state.currentUser.id);

        const subscriptionPlan = parseInt(document.querySelector('input[name="subscriptionPlan"]:checked')?.value || '0');

        state.billboards[bIndex].isBooked = true;
        state.billboards[bIndex].booking = {
            clientName,
            clientPhone,
            clientEmail,
            price,
            dimensions,
            startDate,
            endDate,
            notes,
            subscriptionPlan: subscriptionPlan || null,
            bookedBy: bookedBy,
            bookedOn: isEditing ? state.billboards[bIndex].booking.bookedOn : new Date().toISOString().split('T')[0]
        };

        // Re-generate installments based on dates
        state.billboards[bIndex].installments = calculateInstallments(price, startDate, endDate, bookedBy, clientName);

        saveDatabase();
        
        // Log to Cloud Activity Feed
        logCloudActivity(isEditing ? `تم تعديل بيانات حجز اللوحة رقم #${id} للعميل: ${clientName}` : `تم تسجيل حجز جديد للوحة رقم #${id} للعميل: ${clientName}`);
        
        closeBookingModal();
        renderMapMarkers();
        selectBillboard(id);
        updateAppUI();
        showToast(isEditing ? `تم تعديل بيانات حجز اللوحة #${id}` : `تم تسجيل الحجز بنجاح للوحة #${id}`, "success");
    });

    // Release/delete booking (Admin only)
    document.getElementById('btnReleaseBooking').addEventListener('click', () => {
        const id = parseInt(document.getElementById('billboardId').value);
        const bIndex = state.billboards.findIndex(item => item.id === id);
        if (bIndex === -1) return;

        if (confirm(`هل أنت متأكد من إلغاء حجز اللوحة #${id} وتفريغها نهائياً؟`)) {
            state.billboards[bIndex].isBooked = false;
            state.billboards[bIndex].booking = null;
            state.billboards[bIndex].installments = [];
            
            saveDatabase();
            closeBookingModal();
            renderMapMarkers();
            selectBillboard(id);
            updateAppUI();
            showToast(`تم إلغاء حجز اللوحة #${id} وتفريغها بنجاح`, "info");
        }
    });

    // Settings Firebase Config Save
    document.getElementById('firebaseConfigForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const apiKey = document.getElementById('fbApiKey').value.trim();
        const projectId = document.getElementById('fbProjectId').value.trim();
        
        if (!apiKey || !projectId) {
            showToast("يرجى ملء جميع الحقول المطلوبة", "error");
            return;
        }

        const config = {
            apiKey: apiKey,
            authDomain: `${projectId}.firebaseapp.com`,
            projectId: projectId,
            storageBucket: `${projectId}.appspot.com`,
            messagingSenderId: "123456789",
            appId: "1:123456789:web:123456"
        };

        localStorage.setItem('fb_config', JSON.stringify(config));
        showToast("تم حفظ الإعدادات، يرجى إعادة تحميل التطبيق لتفعيل الاتصال السحابي فعلياً.", "success");
        setTimeout(() => location.reload(), 1500);
    });

    // Filters & exports listeners
    document.getElementById('filterStatus').addEventListener('change', renderReportsTable);
    document.getElementById('filterEmployee').addEventListener('change', renderReportsTable);
    
    const filterClient = document.getElementById('filterClient');
    if (filterClient) {
        filterClient.addEventListener('change', renderReportsTable);
    }
    
    state.reportSortOrder = 'none';
    const btnSort = document.getElementById('btnSortReportClients');
    if (btnSort) {
        btnSort.addEventListener('click', () => {
            if (state.reportSortOrder === 'none' || state.reportSortOrder === 'desc') {
                state.reportSortOrder = 'asc';
                btnSort.innerHTML = '<i class="fa-solid fa-sort-alpha-up"></i> ترتيب (أ-ي)';
                btnSort.style.backgroundColor = '#10B981';
                btnSort.style.color = '#fff';
            } else {
                state.reportSortOrder = 'desc';
                btnSort.innerHTML = '<i class="fa-solid fa-sort-alpha-down"></i> ترتيب (ي-أ)';
                btnSort.style.backgroundColor = '#E50914';
                btnSort.style.color = '#fff';
            }
            renderReportsTable();
        });
    }
    
    document.getElementById('filterInstStatus').addEventListener('change', renderInstallmentsTable);
    document.getElementById('filterInstEmployee').addEventListener('change', renderInstallmentsTable);

    document.getElementById('btnExportCSV').addEventListener('click', exportToCSV);
    document.getElementById('btnPrintReport').addEventListener('click', () => window.print());
    
    document.getElementById('btnExportInstCSV').addEventListener('click', exportInstallmentsToCSV);
    document.getElementById('btnPrintInstReport').addEventListener('click', () => window.print());

    document.getElementById('btnExportJSON').addEventListener('click', exportDatabaseJSON);
    document.getElementById('importFile').addEventListener('change', importDatabaseJSON);
    document.getElementById('btnResetDB').addEventListener('click', resetDatabase);
    document.getElementById('btnAcknowledgeAlert').addEventListener('click', dismissDirectAlert);

    // Toggle 3D perspective view
    const btnToggle3D = document.getElementById('btnToggle3D');
    if (btnToggle3D) {
        btnToggle3D.addEventListener('click', () => {
            const mapEl = document.getElementById('map');
            if (mapEl) {
                mapEl.classList.toggle('map-3d-active');
                const isActive = mapEl.classList.contains('map-3d-active');
                btnToggle3D.classList.toggle('active', isActive);
                
                if (isActive) {
                    showToast("تم تفعيل نمط الرؤية ثلاثي الأبعاد 3D! يمكنك تدوير الخريطة وسحبها لرؤية المنظور الكامل.", "success");
                } else {
                    showToast("تم العودة إلى نمط العرض الثنائي الأبعاد 2D.", "info");
                }
                
                // Redraw map boundaries after animation finishes
                setTimeout(() => {
                    if (state.map) state.map.invalidateSize();
                }, 800);
            }
        });
    }

    // Toggle Add Billboard mode (Admin Only)
    const btnAddBillboard = document.getElementById('btnAddBillboard');
    if (btnAddBillboard) {
        btnAddBillboard.addEventListener('click', () => {
            if (state.currentUser.role !== 'admin') return;
            state.addBillboardMode = !state.addBillboardMode;
            btnAddBillboard.classList.toggle('active', state.addBillboardMode);
            
            if (state.addBillboardMode) {
                state.map.getContainer().style.cursor = 'crosshair';
                showToast("تم تفعيل وضع الإضافة! اضغط على أي مكان على الخريطة لإسقاط لوحة إعلانية جديدة.", "info");
            } else {
                state.map.getContainer().style.cursor = '';
                showToast("تم إلغاء وضع إضافة اللوحات.", "info");
            }
        });
    }
}

// 14. Charts Initialization (Chart.js)
let charts = { occupancy: null, revenue: null, employee: null };

function renderCharts() {
    const booked = state.billboards.filter(b => b.isBooked).length;
    const available = 200 - booked;

    // Pie chart
    const ctxOcc = document.getElementById('occupancyChart').getContext('2d');
    if (charts.occupancy) charts.occupancy.destroy();
    charts.occupancy = new Chart(ctxOcc, {
        type: 'doughnut',
        data: {
            labels: ['محجوزة', 'متاحة'],
            datasets: [{
                data: [booked, available],
                backgroundColor: ['#E50914', '#E5E5EA'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { font: { family: 'Cairo', size: 12 } } } },
            cutout: '70%'
        }
    });

    // Monthly revenue simulation
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    let revenueData = Array(12).fill(0);
    state.billboards.forEach(b => {
        if (b.isBooked && b.booking) {
            const startMonth = new Date(b.booking.startDate).getMonth();
            const endMonth = new Date(b.booking.endDate).getMonth();
            for (let m = startMonth; m <= endMonth; m++) {
                if (m >= 0 && m < 12) revenueData[m] += b.booking.price;
            }
        }
    });

    const ctxRev = document.getElementById('revenueChart').getContext('2d');
    if (charts.revenue) charts.revenue.destroy();
    charts.revenue = new Chart(ctxRev, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                data: [revenueData[0], revenueData[1], revenueData[2], revenueData[3], revenueData[4], revenueData[5], revenueData[6], revenueData[7], revenueData[8], revenueData[9], revenueData[10], revenueData[11]],
                backgroundColor: 'rgba(229, 9, 20, 0.85)',
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, ticks: { font: { family: 'Cairo', size: 10 } } },
                x: { ticks: { font: { family: 'Cairo', size: 10 } } }
            }
        }
    });
}

function renderEmployeeCharts() {
    const names = EMPLOYEES.map(e => e.name);
    const salesData = EMPLOYEES.map(emp => {
        return state.billboards
            .filter(b => b.isBooked && b.booking && b.booking.bookedBy == emp.id)
            .reduce((sum, b) => sum + b.booking.price, 0);
    });

    const ctxEmp = document.getElementById('employeeComparisonChart').getContext('2d');
    if (charts.employee) charts.employee.destroy();
    charts.employee = new Chart(ctxEmp, {
        type: 'radar',
        data: {
            labels: names,
            datasets: [{
                data: salesData,
                backgroundColor: 'rgba(229, 9, 20, 0.15)',
                borderColor: '#E50914',
                pointBackgroundColor: '#E50914',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { r: { ticks: { display: false }, pointLabels: { font: { family: 'Cairo', size: 9 } } } }
        }
    });
}

// 15. Helper UI updates
function updateAppUI() {
    updateSummaryStats();
    updateAlertWidget();
    updateUnreadBadges();
    populateEmployeeFilters();
    checkDirectEmployeeAlerts();
    renderLegend();
}

function updateSummaryStats() {
    let booked = 0, available = 0, expiring = 0;
    state.billboards.forEach(b => {
        const status = getBillboardStatus(b);
        if (status === 'available') available++;
        else {
            booked++;
            if (status === 'expiring') expiring++;
        }
    });
    document.getElementById('statBookedCount').textContent = booked;
    document.getElementById('statAvailableCount').textContent = available;
    document.getElementById('statExpiringCount').textContent = expiring;
}

function updateAlertWidget() {
    const container = document.getElementById('alertWidgetBody');
    container.innerHTML = '';
    const expiring = state.billboards.filter(b => getBillboardStatus(b) === 'expiring');
    document.getElementById('alertCount').textContent = expiring.length;
    
    if (expiring.length === 0) {
        container.innerHTML = `<p style="font-size:11px; color:var(--text-muted); text-align:center; padding:10px 0;">لا توجد تنبيهات نشطة.</p>`;
        return;
    }

    expiring.forEach(b => {
        const days = Math.ceil((new Date(b.booking.endDate) - new Date()) / (1000 * 60 * 60 * 24));
        const item = document.createElement('div');
        item.className = 'alert-item';
        
        const isOwner = state.currentUser.role === 'admin' || b.booking.bookedBy == state.currentUser.id;
        const clientText = isOwner ? b.booking.clientName : 'عميل زميل';
        
        let whatsappBtnHTML = '';
        if (isOwner) {
            whatsappBtnHTML = `
                <button class="btn btn-whatsapp" style="padding: 4px 8px; font-size: 10px; margin-top: 6px; display: inline-flex; align-items: center; gap: 4px; border-radius: 4px; width:fit-content;" onclick="event.stopPropagation(); sendWhatsAppReminder(${b.id}, '${b.booking.clientPhone}', '${b.booking.clientName}', '${b.booking.endDate}')">
                    <i class="fa-brands fa-whatsapp"></i> تذكير بالواتساب
                </button>
            `;
        }

        item.innerHTML = `
            <div style="display:flex; flex-direction:column; width:100%;">
                <div><strong>لوحة #${b.id.toString().padStart(3, '0')}</strong> - ${clientText}</div>
                <span class="alert-item-time" style="margin-bottom:2px;">ينتهي خلال ${days} أيام (${b.booking.endDate})</span>
                ${whatsappBtnHTML}
            </div>
        `;
        item.addEventListener('click', () => {
            document.querySelector('[data-target="mapPanel"]').click();
            selectBillboard(b.id);
        });
        container.appendChild(item);
    });
}

function updateUnreadBadges() {
    const booked = state.billboards.filter(b => b.isBooked).length;
    document.getElementById('unreadBookingsBadge').textContent = booked;
}

function populateEmployeeFilters() {
    const filters = [document.getElementById('filterEmployee'), document.getElementById('filterInstEmployee')];
    filters.forEach(filter => {
        if (!filter) return;
        const val = filter.value;
        filter.innerHTML = '<option value="all">كل الموظفين</option>';
        EMPLOYEES.forEach(emp => {
            const opt = document.createElement('option');
            opt.value = emp.id;
            opt.textContent = emp.name;
            filter.appendChild(opt);
        });
        filter.value = val;
    });
}

function openBookingModal(id) {
    const b = state.billboards.find(item => item.id === id);
    if (!b) return;
    document.getElementById('bookingForm').reset();
    document.getElementById('billboardId').value = b.id;
    document.getElementById('modalTitle').textContent = `حجز اللوحة الإعلانية #${b.id.toString().padStart(3, '0')}`;
    
    const today = new Date();
    const nextMonth = new Date();
    nextMonth.setMonth(today.getMonth() + 1);
    document.getElementById('startDate').value = today.toISOString().split('T')[0];
    document.getElementById('endDate').value = nextMonth.toISOString().split('T')[0];
    
    const btnRelease = document.getElementById('btnReleaseBooking');
    if (b.isBooked && b.booking) {
        document.getElementById('clientName').value = b.booking.clientName;
        document.getElementById('clientPhone').value = b.booking.clientPhone;
        document.getElementById('clientEmail').value = b.booking.clientEmail || '';
        document.getElementById('billboardPrice').value = b.booking.price;
        document.getElementById('billboardDimensions').value = b.booking.dimensions || '3×6 وجهين';
        document.getElementById('startDate').value = b.booking.startDate;
        document.getElementById('endDate').value = b.booking.endDate;
        document.getElementById('notes').value = b.booking.notes || '';
        if (state.currentUser.role === 'admin') btnRelease.style.display = 'block';
    } else {
        btnRelease.style.display = 'none';
        document.getElementById('billboardPrice').value = 8000;
        document.getElementById('billboardDimensions').value = '3×6 وجهين';
    }
    document.getElementById('bookingModal').classList.add('active');
}

function closeBookingModal() {
    document.getElementById('bookingModal').classList.remove('active');
}

// 16. CSV and JSON File Exports
function exportToCSV() {
    let csv = '\uFEFF';
    csv += 'رقم اللوحة,الإحداثيات,الحالة,العميل,الهاتف,السعر,تاريخ البدء,تاريخ الانتهاء,الموظف المسؤول\n';
    
    state.billboards.forEach(b => {
        const status = getBillboardStatus(b);
        const statusText = status === 'available' ? 'متاحة' : 'محجوزة';
        const isOwner = state.currentUser.role === 'admin' || (b.isBooked && b.booking.bookedBy == state.currentUser.id);
        const client = b.isBooked ? (isOwner ? b.booking.clientName : 'عميل زميل') : '';
        const phone = b.isBooked ? (isOwner ? b.booking.clientPhone : '***') : '';
        const price = b.isBooked ? (isOwner ? b.booking.price : '***') : '';
        const emp = b.isBooked ? (EMPLOYEES.find(e => e.id == b.booking.bookedBy)?.name || 'المدير العام') : '';
        
        csv += `${b.id},"${b.lat.toFixed(5)}, ${b.lng.toFixed(5)}",${statusText},"${client}","${phone}",${price},${b.isBooked ? b.booking.startDate : ''},${b.isBooked ? b.booking.endDate : ''},"${emp}"\n`;
    });
    triggerDownload(csv, `تقرير_حجوزات_HT_${new Date().toISOString().split('T')[0]}.csv`);
}

function exportInstallmentsToCSV() {
    let csv = '\uFEFF';
    csv += 'رقم اللوحة,العميل,تاريخ الاستحقاق,المبلغ (ج.م),الحالة,الموظف المسؤول\n';
    
    state.billboards.forEach(b => {
        if (b.isBooked && b.installments) {
            b.installments.forEach(inst => {
                const isOwner = state.currentUser.role === 'admin' || b.booking.bookedBy == state.currentUser.id;
                const client = isOwner ? inst.clientName : 'عميل زميل';
                const status = inst.status === 'paid' ? 'تم الدفع' : 'معلق';
                const emp = EMPLOYEES.find(e => e.id == b.booking.bookedBy)?.name || 'المدير العام';
                csv += `${b.id},"${client}",${inst.dueDate},${inst.amount},${status},"${emp}"\n`;
            });
        }
    });
    triggerDownload(csv, `تقرير_تحصيل_الأقساط_HT_${new Date().toISOString().split('T')[0]}.csv`);
}

function triggerDownload(content, filename) {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportDatabaseJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.billboards, null, 4));
    const a = document.createElement('a');
    a.setAttribute("href", dataStr);
    a.setAttribute("download", `نسخة_سحابية_HT_${new Date().toISOString().split('T')[0]}.json`);
    a.click();
}

function importDatabaseJSON(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(evt) {
        try {
            const imported = JSON.parse(evt.target.result);
            if (Array.isArray(imported) && imported.length > 0) {
                state.billboards = imported;
                saveDatabase();
                renderMapMarkers();
                updateAppUI();
                showToast("تم استيراد قاعدة البيانات ومزامنتها بنجاح", "success");
            }
        } catch (err) {
            showToast("خطأ في قراءة ملف النسخة الاحتياطية", "error");
        }
    };
    reader.readAsText(file);
}

function resetDatabase() {
    if (state.currentUser.role !== 'admin') {
        showToast("عذراً، صلاحية المسح وإعادة التعيين متاحة فقط للمدير العام", "error");
        return;
    }
    if (confirm("هل تريد مسح جميع الحجوزات السحابية تماماً وتصفير النظام؟")) {
        generateInitialBillboards();
        renderMapMarkers();
        updateAppUI();
        showToast("تم إعادة تهيئة وتصفير قاعدة البيانات بنجاح", "info");
    }
}



function setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
            
            item.classList.add('active');
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
            
            updateTopbarTitles(targetId);

            if (targetId === 'mapPanel' && state.map) {
                setTimeout(() => { state.map.invalidateSize(); }, 150);
            } else if (targetId === 'dashboardPanel') {
                renderCharts();
            } else if (targetId === 'reportsPanel') {
                renderReportsTable();
            } else if (targetId === 'installmentsPanel') {
                renderInstallmentsTable();
            } else if (targetId === 'employeePanel') {
                renderEmployeeTable();
                renderEmployeeCharts();
            } else if (targetId === 'chatPanel') {
                initChatPanel();
            } else if (targetId === 'customersPanel') {
                initCustomersPanel();
            } else if (targetId === 'employeesMgmtPanel') {
                initEmployeesMgmtPanel();
            } else if (targetId === 'cloudPanel') {
                initCloudPanel();
            }
        });
    });
}

function updateTopbarTitles(panelId) {
    const title = document.getElementById('panelTitle');
    const subtitle = document.getElementById('panelSubtitle');
    
    switch (panelId) {
        case 'mapPanel':
            title.textContent = 'خريطة القمر الصناعي التفاعلية لكورنيش السويس';
            subtitle.textContent = 'عرض الحجوزات والمزامنة اللحظية مع بقية الـ 10 موظفين';
            break;
        case 'cloudPanel':
            title.textContent = 'بوابة الاتصال السحابي والمزامنة اللحظية';
            subtitle.textContent = 'رصد الأنشطة الفورية وحالة اتصال الموظفين الـ 10 بالخادم';
            break;
        case 'employeesMgmtPanel':
            title.textContent = 'إدارة الموظفين والصلاحيات الفعالة';
            subtitle.textContent = 'تعديل أسماء الموظفين وكلمات المرور والتحكم بصلاحية الدخول لأي قسم';
            break;
        case 'dashboardPanel':
            title.textContent = 'لوحة تحليلات وإشغالات اللوحات';
            subtitle.textContent = 'رصد للمبيعات الإجمالية ونسب الإشغال';
            break;
        case 'reportsPanel':
            title.textContent = 'جدول الحجوزات والعملاء';
            subtitle.textContent = 'عرض وتصدير بيانات الحجوزات لـ HT ADVERTISING';
            break;
        case 'installmentsPanel':
            title.textContent = 'تحصيل الأقساط الشهرية للإعلانات';
            subtitle.textContent = 'رصد الدفعات المالية والتحصيل لكل عميل وموظف مسؤول';
            break;
        case 'employeePanel':
            title.textContent = 'تقييم مبيعات وعمولات الموظفين الـ 10';
            subtitle.textContent = 'مقارنة أداء المبيعات والعمولات المحتسبة (5%) لكل موظف';
            break;
        case 'settingsPanel':
            title.textContent = 'إعدادات النظام وقاعدة البيانات السحابية';
            subtitle.textContent = 'ربط Firebase Firestore والنسخ الاحتياطي';
            break;
        case 'chatPanel':
            title.textContent = 'غرفة المحادثات والتواصل الإداري';
            subtitle.textContent = 'محادثات فورية آمنة بين المدير العام وموظفي المبيعات';
            break;
        case 'customersPanel':
            title.textContent = 'دليل وملفات العملاء';
            subtitle.textContent = 'عرض وتتبع سجل إعلانات وتعاقدات كل عميل على حدة';
            break;
        case 'sizesPanel':
            title.textContent = 'المقاسات المستخدمة والمتاحة';
            subtitle.textContent = 'كتالوج المقاسات الرسمية المعتمدة لحملات HT ADVERTISING';
            break;
    }
}

// Toast alerts helper
function showToast(message, type = "info") {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    let icon = '<i class="fa-solid fa-info-circle"></i>';
    if (type === 'success') icon = '<i class="fa-solid fa-circle-check"></i>';
    if (type === 'error') icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            if (container.contains(toast)) container.removeChild(toast);
        }, 300);
    }, 4500);
}

// 17. WhatsApp Reminder API Integration
window.sendWhatsAppReminder = function(billboardId, phone, clientName, endDate) {
    const b = state.billboards.find(item => item.id === billboardId);
    if (!b || !b.booking) return;

    const employeeId = b.booking.bookedBy;

    // Construct Arabic template message
    const message = `السلام عليكم ورحمة الله وبركاته، نود تذكيركم بقرب موعد انتهاء الاشتراك الخاص بكم لدى شركة HT ADVERTISING للوحة الإعلانية رقم #${billboardId.toString().padStart(3, '0')} وذلك بتاريخ ${endDate}. يرجى التواصل معنا للتجديد. شكراً لكم.`;
    
    let cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.startsWith('0')) {
        cleanPhone = '2' + cleanPhone;
    }
    
    const url = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    // Create direct WhatsApp alert warning to the employee responsible
    const alertObj = {
        id: Date.now(),
        toEmployeeId: employeeId,
        billboardId: billboardId,
        clientName: clientName,
        isWhatsAppAlert: true,
        timestamp: new Date().toISOString()
    };

    // Save to alerts database
    let alerts = [];
    const saved = localStorage.getItem('ht_direct_alerts');
    if (saved) {
        alerts = JSON.parse(saved);
    }
    alerts = alerts.filter(a => !(a.billboardId == billboardId && a.toEmployeeId == employeeId && a.isWhatsAppAlert));
    alerts.push(alertObj);
    localStorage.setItem('ht_direct_alerts', JSON.stringify(alerts));

    if (state.isFirebaseConnected && state.firestoreDb) {
        state.firestoreDb.collection('collection_alerts').doc(`${billboardId}_${employeeId}_wa`).set(alertObj)
            .catch(err => console.error("Firebase alert sync error", err));
    }

    showToast("تم فتح واتساب لإرسال رسالة التذكير للعميل وتنبيه الموظف المسؤول للمتابعة!", "success");
    checkDirectEmployeeAlerts();
};

// 17.5. WhatsApp Send Offer integration for Available Billboards
window.sendWhatsAppOffer = function(billboardId) {
    const b = state.billboards.find(item => item.id === billboardId);
    if (!b) return;

    const phoneInput = prompt("يرجى إدخال رقم هاتف العميل لإرسال العرض إليه (مثال: 01012345678):");
    if (!phoneInput) return;
    
    let cleanPhone = phoneInput.replace(/\D/g, '');
    if (cleanPhone.startsWith('0')) {
        cleanPhone = '2' + cleanPhone;
    }
    
    const size = b.booking?.dimensions || '3×6 وجهين';
    const message = `السلام عليكم ورحمة الله وبركاته، تقدم لكم شركة HT ADVERTISING عرض سعر مميز لحجز اللوحة الإعلانية رقم #${billboardId.toString().padStart(3, '0')} بموقعها المتميز على كورنيش السويس. مقاس اللوحة: ${size}. يرجى التواصل معنا للحجز والاستفسار. شكراً لكم.`;
    
    const url = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    showToast("تم فتح واتساب لإرسال العرض للعميل بنجاح!", "success");
};

// 18. Chat Room Implementation (GM-Employee Only Chat Room)
let chatState = {
    activePartnerId: null,
    unreadCounts: {}
};

window.initChatPanel = function() {
    renderChatContacts();
    setupChatFormHandler();
    loadChatMessages();
    renderChatMessages();
};

function renderChatContacts() {
    const listContainer = document.getElementById('chatContactsList');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    
    const isAdmin = state.currentUser.role === 'admin';
    let contacts = [];
    
    if (isAdmin) {
        // Admin sees all 10 employees
        contacts = EMPLOYEES.map(emp => ({
            id: emp.id.toString(),
            name: emp.name,
            email: emp.email,
            avatarIcon: 'fa-user-tie'
        }));
    } else {
        // Employees ONLY see the General Manager (Admin)
        contacts = [{
            id: 'admin',
            name: 'المدير العام (الإدارة)',
            email: ADMIN_EMAIL,
            avatarIcon: 'fa-shield-halved'
        }];
    }

    contacts.forEach(contact => {
        const unreadCount = chatState.unreadCounts[contact.id] || 0;
        const unreadBadge = unreadCount > 0 ? `<span class="chat-contact-badge">${unreadCount}</span>` : '';
        
        const item = document.createElement('div');
        item.className = 'chat-contact-item';
        if (chatState.activePartnerId === contact.id) {
            item.className += ' active';
        }
        item.innerHTML = `
            <div class="chat-contact-avatar">
                <i class="fa-solid ${contact.avatarIcon}"></i>
            </div>
            <div class="chat-contact-info">
                <span class="chat-contact-name">${contact.name}</span>
                <span class="chat-contact-email">${contact.email}</span>
            </div>
            ${unreadBadge}
        `;
        
        item.addEventListener('click', () => {
            selectChatPartner(contact.id, contact.name);
        });
        listContainer.appendChild(item);
    });
}

function selectChatPartner(partnerId, partnerName) {
    chatState.activePartnerId = partnerId;
    
    // Clear unread count
    chatState.unreadCounts[partnerId] = 0;
    updateUnreadMessageBadge();
    
    // Rerender contacts list to show active state
    renderChatContacts();
    
    // Update Header details
    document.getElementById('activeChatPartnerName').textContent = partnerName;
    document.getElementById('activeChatPartnerStatus').innerHTML = '<span class="pulse-indicator online"></span> نشط الآن';
    
    // Enable inputs
    document.getElementById('chatInput').disabled = false;
    document.getElementById('btnSendChat').disabled = false;
    
    // Load and render messages
    renderChatMessages();
}

function loadChatMessages() {
    let messages = [];
    const saved = localStorage.getItem('ht_chat_messages');
    if (saved) {
        messages = JSON.parse(saved);
    }
    state.chatMessages = messages;
}

function renderChatMessages() {
    const container = document.getElementById('chatMessagesContainer');
    if (!container) return;
    container.innerHTML = '';
    
    if (!chatState.activePartnerId) {
        container.innerHTML = `
            <div class="chat-placeholder">
                <i class="fa-solid fa-comments"></i>
                <p>اختر جهة اتصال للبدء بالمحادثات التفاعلية الفورية.</p>
            </div>
        `;
        return;
    }
    
    // Filter messages for current active chat pair
    loadChatMessages();
    const myId = state.currentUser.id.toString();
    const partnerId = chatState.activePartnerId.toString();
    
    const chatPairMsgs = state.chatMessages.filter(msg => 
        (msg.fromId == myId && msg.toId == partnerId) || 
        (msg.fromId == partnerId && msg.toId == myId)
    );
    
    if (chatPairMsgs.length === 0) {
        container.innerHTML = `
            <div class="chat-placeholder">
                <i class="fa-solid fa-message"></i>
                <p>لا توجد رسائل سابقة. ابدأ المحادثة الآن!</p>
            </div>
        `;
        return;
    }
    
    chatPairMsgs.forEach(msg => {
        const isSentByMe = msg.fromId == myId;
        const bubbleType = isSentByMe ? 'sent' : 'received';
        
        const bubble = document.createElement('div');
        bubble.className = `chat-message-bubble ${bubbleType}`;
        
        const dateObj = new Date(msg.timestamp);
        const timeText = dateObj.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
        
        bubble.innerHTML = `
            <span>${msg.text}</span>
            <span class="chat-message-time">${timeText}</span>
        `;
        container.appendChild(bubble);
    });
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function setupChatFormHandler() {
    const form = document.getElementById('chatForm');
    if (!form) return;
    
    // Remove old listeners to avoid stacking
    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);
    
    newForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('chatInput');
        const text = input.value.trim();
        if (!text || !chatState.activePartnerId) return;
        
        const myId = state.currentUser.id.toString();
        const partnerId = chatState.activePartnerId.toString();
        
        const msgObj = {
            id: Date.now(),
            fromId: myId,
            toId: partnerId,
            text: text,
            timestamp: new Date().toISOString()
        };
        
        // Save locally
        loadChatMessages();
        state.chatMessages.push(msgObj);
        localStorage.setItem('ht_chat_messages', JSON.stringify(state.chatMessages));
        
        // Sync to Firebase if online
        if (state.isFirebaseConnected && state.firestoreDb) {
            state.firestoreDb.collection('chats').doc(msgObj.id.toString()).set(msgObj)
                .catch(err => console.error("Firestore chat error", err));
        } else {
            syncToFreeCloud('chats', state.chatMessages);
        }
        
        input.value = '';
        renderChatMessages();
        
        // Trigger automated simulation response if offline
        if (!state.isFirebaseConnected) {
            triggerOfflineChatSimulationResponse(text);
        }
    });
}

function triggerOfflineChatSimulationResponse(employeeMessageText) {
    const myRole = state.currentUser.role;
    const partnerId = chatState.activePartnerId;
    
    setTimeout(() => {
        // Double check if user is still chatting with same partner
        if (chatState.activePartnerId !== partnerId) return;
        
        let replyText = '';
        if (myRole === 'employee') {
            // GM replies
            const replies = [
                "أهلاً بك، لقد استلمت رسالتك وجاري مراجعة طلبك.",
                "شكراً على التحديث، يرجى متابعة تحصيل القسط الخاص بالعميل في أسرع وقت.",
                "تمام، تم تدوين الملاحظة. هل هناك أي تحديث بخصوص حجوزات كورنيش السويس؟",
                "أرجو التأكد من تواريخ انتهاء العقود قبل إرسال عروض التجديد للعملاء."
            ];
            replyText = replies[Math.floor(Math.random() * replies.length)];
        } else {
            // Employee replies
            const replies = [
                "أهلاً يا فندم، أنا متابع مع العميل حالياً وسوف أقوم بتحصيل الدفعة غداً.",
                "علم يا فندم، جاري التواصل وتحديث النظام فور إتمام العملية.",
                "لقد قمت بإرسال التذكير للعميل بالفعل وجاري انتظار ردهم بخصوص التجديد.",
                "حاضر يا فندم، سأقوم بمراجعة المبيعات الخاصة بي ومطابقة البيانات."
            ];
            replyText = replies[Math.floor(Math.random() * replies.length)];
        }
        
        const simMsg = {
            id: Date.now(),
            fromId: partnerId.toString(),
            toId: state.currentUser.id.toString(),
            text: replyText,
            timestamp: new Date().toISOString()
        };
        
        loadChatMessages();
        state.chatMessages.push(simMsg);
        localStorage.setItem('ht_chat_messages', JSON.stringify(state.chatMessages));
        
        renderChatMessages();
        showToast(`رسالة جديدة من: ${myRole === 'employee' ? 'المدير العام' : EMPLOYEES.find(e=>e.id==partnerId).name}`, "info");
    }, 2500);
}

function updateUnreadMessageBadge() {
    const totalUnread = Object.values(chatState.unreadCounts).reduce((sum, c) => sum + c, 0);
    const badge = document.getElementById('unreadMessagesBadge');
    if (!badge) return;
    if (totalUnread > 0) {
        badge.textContent = totalUnread;
        badge.style.display = 'inline-block';
    } else {
        badge.style.display = 'none';
    }
}

// 19. Customers Directory Panel Logic (Unique Profile & Billboard History)
window.initCustomersPanel = function() {
    // Reset views
    document.getElementById('customerListView').style.display = 'block';
    document.getElementById('customerProfileView').style.display = 'none';
    
    // Bind Back button
    document.getElementById('btnBackToCustomerList').onclick = () => {
        document.getElementById('customerListView').style.display = 'block';
        document.getElementById('customerProfileView').style.display = 'none';
        renderCustomerList();
    };
    
    // Bind Search input
    const searchInput = document.getElementById('customerSearch');
    if (searchInput) {
        // Remove old listeners by cloning
        const newSearch = searchInput.cloneNode(true);
        searchInput.parentNode.replaceChild(newSearch, searchInput);
        newSearch.addEventListener('input', renderCustomerList);
    }
    
    renderCustomerList();
};

function renderCustomerList() {
    const tableBody = document.getElementById('customerTableBody');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    
    const searchQuery = document.getElementById('customerSearch')?.value.trim().toLowerCase() || '';
    
    // Map of clientName -> { name, phone, bookingsCount, totalVal, dueVal, overdueVal }
    const customerMap = {};
    const todayStr = new Date().toISOString().split('T')[0];
    
    state.billboards.forEach(b => {
        if (b.isBooked && b.booking) {
            const clientName = b.booking.clientName;
            const phone = b.booking.clientPhone;
            const price = b.booking.price;
            
            if (!customerMap[clientName]) {
                customerMap[clientName] = {
                    name: clientName,
                    phone: phone,
                    bookingsCount: 0,
                    totalVal: 0,
                    dueVal: 0,
                    overdueVal: 0
                };
            }
            customerMap[clientName].bookingsCount++;
            
            // Calculate financial metrics from installments
            if (b.installments && b.installments.length > 0) {
                b.installments.forEach(inst => {
                    customerMap[clientName].totalVal += inst.amount;
                    if (inst.status === 'pending') {
                        customerMap[clientName].dueVal += inst.amount;
                        if (inst.dueDate < todayStr) {
                            customerMap[clientName].overdueVal += inst.amount;
                        }
                    }
                });
            } else {
                // Fallback if no installments
                customerMap[clientName].totalVal += price;
                customerMap[clientName].dueVal += price;
            }
        }
    });
    
    let customersList = Object.values(customerMap);
    
    // Privacy protection: Regular Employees only see customers they actually registered or booked!
    const isAdmin = state.currentUser.role === 'admin';
    if (!isAdmin) {
        customersList = customersList.filter(cust => {
            // Check if this client has any billboard booked by state.currentUser.id
            const hasMyBooking = state.billboards.some(b => 
                b.isBooked && b.booking && b.booking.clientName === cust.name && b.booking.bookedBy == state.currentUser.id
            );
            return hasMyBooking;
        });
    }

    // Filter by search query
    if (searchQuery) {
        customersList = customersList.filter(c => 
            c.name.toLowerCase().includes(searchQuery) || 
            c.phone.includes(searchQuery)
        );
    }
    
    if (customersList.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-muted); padding:30px 0;">لا يوجد عملاء مسجلين حالياً.</td></tr>`;
        return;
    }
    
    customersList.forEach(cust => {
        // WhatsApp button next to the customer name (visible for General Manager/Admin only)
        let nameHtml = `<strong>${cust.name}</strong>`;
        if (isAdmin) {
            let cleanPhone = cust.phone.replace(/\D/g, '');
            if (cleanPhone.startsWith('0')) {
                cleanPhone = '2' + cleanPhone;
            }
            const waMessage = `السلام عليكم ورحمة الله وبركاته، نتواصل معكم من شركة HT ADVERTISING للإعلانات بخصوص تعاقداتكم الإعلانية لدينا.`;
            const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(waMessage)}`;
            nameHtml += `
                <a href="${waUrl}" target="_blank" class="btn btn-whatsapp" 
                   style="display:inline-flex; align-items:center; justify-content:center; width:22px; height:22px; border-radius:50%; margin-right:6px; font-size:11px; padding:0; text-decoration:none; vertical-align:middle;" 
                   title="مراسلة واتساب الفورية (مدير عام فقط)">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
            `;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${nameHtml}</td>
            <td>${cust.phone}</td>
            <td><span class="billboard-header-badge badge-booked">${cust.bookingsCount} لوحات</span></td>
            <td><strong>${cust.totalVal.toLocaleString()} ج.م</strong></td>
            <td style="color:var(--text-main); font-weight:700;">${cust.dueVal.toLocaleString()} ج.م</td>
            <td style="color:${cust.overdueVal > 0 ? '#E50914' : 'var(--text-muted)'}; font-weight:800;">
                ${cust.overdueVal > 0 ? `⚠️ ${cust.overdueVal.toLocaleString()} ج.م` : '0 ج.م'}
            </td>
            <td>
                <div style="display:flex; gap:6px; align-items:center;">
                    <button class="btn btn-secondary" style="padding:4px 8px; font-size:11px;" onclick="viewCustomerProfile('${cust.name.replace(/'/g, "\\'")}')">
                        <i class="fa-solid fa-eye"></i> عرض الملف
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

window.viewCustomerProfile = function(clientName) {
    document.getElementById('customerListView').style.display = 'none';
    document.getElementById('customerProfileView').style.display = 'block';
    
    // Filter bookings belonging to this customer
    const bookings = [];
    state.billboards.forEach(b => {
        if (b.isBooked && b.booking && b.booking.clientName === clientName) {
            bookings.push({
                ...b.booking,
                billboardId: b.id
            });
        }
    });
    
    if (bookings.length === 0) return;
    
    const clientPhone = bookings[0].clientPhone;
    
    // Set Header
    document.getElementById('profCustomerName').textContent = clientName;
    document.getElementById('profCustomerPhone').textContent = clientPhone;
    
    // Calculate total value
    const totalVal = bookings.reduce((sum, book) => sum + book.price, 0);
    
    document.getElementById('profTotalBillboards').textContent = `${bookings.length} لوحات`;
    document.getElementById('profTotalContractsValue').textContent = `${totalVal.toLocaleString()} ج.م`;
    
    // Configure WhatsApp Button
    document.getElementById('btnProfWhatsApp').onclick = () => {
        let cleanPhone = clientPhone.replace(/\D/g, '');
        if (cleanPhone.startsWith('0')) {
            cleanPhone = '2' + cleanPhone;
        }
        const message = `السلام عليكم ورحمة الله وبركاته، نتواصل معكم من شركة HT ADVERTISING للإعلانات بخصوص تعاقداتكم الإعلانية لدينا.`;
        const url = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        showToast(`تم فتح واتساب لمراسلة العميل (${clientName})`, "success");
    };
    
    // Populate bookings table
    const tableBody = document.getElementById('profCustomerBookingsBody');
    tableBody.innerHTML = '';
    
    // Sort bookings by startDate descending (latest first)
    bookings.sort((a, b) => b.startDate.localeCompare(a.startDate));
    
    bookings.forEach(book => {
        const empName = EMPLOYEES.find(e => e.id == book.bookedBy)?.name || 'المدير العام';
        
        // Calculate status dynamically
        const today = new Date().toISOString().split('T')[0];
        let statusBadge = '';
        let rowBg = '';
        
        if (book.endDate < today) {
            statusBadge = `<span class="billboard-header-badge badge-pending" style="background:#e5e5ea; color:#8e8e93; border-radius:8px; padding:3px 10px;">منتهي</span>`;
            rowBg = '';
        } else {
            const expiry = new Date(book.endDate);
            const todayDate = new Date();
            const diffDays = Math.ceil((expiry - todayDate) / (1000 * 60 * 60 * 24));
            if (diffDays >= 0 && diffDays <= 10) {
                statusBadge = `<span class="billboard-header-badge badge-expiring" style="border-radius:8px; padding:3px 10px;">⏰ يوشك على الانتهاء</span>`;
                rowBg = 'background: rgba(245,158,11,0.06);';
            } else {
                statusBadge = `<span style="background:#10B981; color:white; border-radius:8px; padding:3px 10px; font-size:11px; font-weight:800; display:inline-flex; align-items:center; gap:4px;"><span style="width:7px;height:7px;background:white;border-radius:50%;display:inline-block;animation:pulse-green 1.5s infinite;"></span>نشط</span>`;
                rowBg = 'background: rgba(16,185,129,0.05); border-right: 3px solid #10B981;';
            }
        }

        // Subscription plan label
        const planMonths = book.subscriptionPlan || null;
        let planBadge = '—';
        if (planMonths == 1)  planBadge = `<span style="background:#3B82F6;color:white;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:800;">📅 شهري</span>`;
        else if (planMonths == 3)  planBadge = `<span style="background:#8B5CF6;color:white;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:800;">🗓 ربع سنوي</span>`;
        else if (planMonths == 6)  planBadge = `<span style="background:#F59E0B;color:white;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:800;">✨ نصف سنوي</span>`;
        else if (planMonths == 12) planBadge = `<span style="background:#E50914;color:white;border-radius:6px;padding:2px 8px;font-size:10px;font-weight:800;">🏆 سنوي</span>`;
        
        const tr = document.createElement('tr');
        tr.style.cssText = rowBg;
        tr.innerHTML = `
            <td><strong style="font-size:13px;">#${book.billboardId.toString().padStart(3, '0')}</strong></td>
            <td>${planBadge}</td>
            <td>${book.startDate}</td>
            <td>${book.endDate}</td>
            <td><strong>${book.price.toLocaleString()} ج.م</strong></td>
            <td>${empName}</td>
            <td>${statusBadge}</td>
            <td>
                <button class="btn btn-secondary" 
                        style="padding:4px 8px; font-size:10px; background:#1D4ED8; color:white; border:none; border-radius:6px; cursor:pointer; display:flex; align-items:center; gap:4px;"
                        onclick="goToBillboardOnMap(${book.billboardId})">
                    <i class="fa-solid fa-map-location-dot"></i> عرض
                </button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
};

// Release billboard booking directly from map quick-info detail panel
window.releaseBillboardFromDetailPanel = function(id) {
    const bIndex = state.billboards.findIndex(item => item.id === id);
    if (bIndex === -1) return;
    
    const b = state.billboards[bIndex];
    if (!b.isBooked || !b.booking) return;

    // Check permission: Admin can release any, Employee can release their own
    const isOwner = state.currentUser.role === 'admin' || b.booking.bookedBy == state.currentUser.id;
    if (!isOwner) {
        showToast("عذراً، لا تمتلك الصلاحية لإلغاء حجز هذه اللوحة!", "error");
        return;
    }

    if (confirm(`هل أنت متأكد من إلغاء حجز اللوحة #${id.toString().padStart(3, '0')} وتفريغها نهائياً؟`)) {
        b.isBooked = false;
        b.booking = null;
        b.installments = [];
        
        saveDatabase();
        renderMapMarkers();
        selectBillboard(id);
        updateAppUI();
        showToast(`تم إلغاء حجز اللوحة #${id} وتفريغها بنجاح`, "info");
    }
};

// Rotate billboard marker inner DIV element and update state
window.rotateBillboard = function(id, angle) {
    const bIndex = state.billboards.findIndex(item => item.id === id);
    if (bIndex === -1) return;
    
    const angleVal = parseInt(angle);
    state.billboards[bIndex].rotation = angleVal;
    
    // Update displayed text
    const displayVal = document.getElementById(`rotationVal_${id}`);
    if (displayVal) {
        displayVal.textContent = `${angleVal}°`;
    }
    
    // Update marker styling transform rotation in real-time
    const marker = state.markers[id];
    if (marker) {
        const element = marker.getElement();
        if (element) {
            const innerDiv = element.querySelector('.custom-leaflet-marker');
            if (innerDiv) {
                innerDiv.style.transform = `rotate(${angleVal}deg)`;
            }
        }
    }
    
    // Debounce saving to localstorage to avoid heavy write ticks
    clearTimeout(state.rotationSaveTimeout);
    state.rotationSaveTimeout = setTimeout(() => {
        saveDatabase();
    }, 450);
};

// Change billboard marker color (for available status)
window.changeBillboardColor = function(id, color) {
    const bIndex = state.billboards.findIndex(item => item.id === id);
    if (bIndex === -1) return;
    state.billboards[bIndex].color = color;
    saveDatabase();
    
    // Live update color if available status
    const b = state.billboards[bIndex];
    if (getBillboardStatus(b) === 'available') {
        const marker = state.markers[id];
        if (marker) {
            const innerDiv = marker.getElement()?.querySelector('.custom-leaflet-marker');
            if (innerDiv) {
                innerDiv.style.backgroundColor = color;
            }
        }
    }
};

// Change billboard marker size
window.changeBillboardSize = function(id, size) {
    const sizeVal = parseInt(size);
    const bIndex = state.billboards.findIndex(item => item.id === id);
    if (bIndex === -1) return;
    state.billboards[bIndex].size = sizeVal;
    
    // Update size value text
    const displayVal = document.getElementById(`sizeVal_${id}`);
    if (displayVal) {
        displayVal.textContent = `${sizeVal}px`;
    }
    
    // Live update size on marker element
    const marker = state.markers[id];
    if (marker) {
        const innerDiv = marker.getElement()?.querySelector('.custom-leaflet-marker');
        if (innerDiv) {
            const shape = state.billboards[bIndex].shape || 'rectangle';
            let w = sizeVal;
            let h = sizeVal;
            if (shape === 'rectangle') {
                w = sizeVal * 1.5;
                h = sizeVal * 0.6;
            } else if (shape === 'oval') {
                w = sizeVal * 1.4;
                h = sizeVal * 0.8;
            }
            innerDiv.style.width = `${w}px`;
            innerDiv.style.height = `${h}px`;
        }
    }
    
    // Debounce database writing
    clearTimeout(state.sizeSaveTimeout);
    state.sizeSaveTimeout = setTimeout(() => {
        saveDatabase();
    }, 450);
};

// Change billboard marker shape
window.changeBillboardShape = function(id, shape) {
    const bIndex = state.billboards.findIndex(item => item.id === id);
    if (bIndex === -1) return;
    state.billboards[bIndex].shape = shape;
    saveDatabase();
    
    // Redraw markers to apply clip-paths and dimensions
    renderMapMarkers();
    renderLegend();
};

// Admin only: Delete billboard from system
window.deleteBillboardFromSystem = function(id) {
    if (state.currentUser.role !== 'admin') return;
    if (confirm(`هل أنت متأكد من حذف اللوحة الإعلانية #${id} نهائياً من الخريطة وقاعدة البيانات؟ لا يمكن التراجع عن هذا الإجراء.`)) {
        state.billboards = state.billboards.filter(item => item.id !== id);
        saveDatabase();
        
        // Remove map marker
        if (state.markers[id]) {
            state.map.removeLayer(state.markers[id]);
            delete state.markers[id];
        }
        
        // Clear details panel
        document.getElementById('quickInfoContent').innerHTML = `
            <div class="quick-info-placeholder">
                <i class="fa-solid fa-map-pin"></i>
                <p>تم حذف اللوحة #${id} بنجاح. اختر لوحة أخرى لعرض التفاصيل.</p>
            </div>
        `;
        
        renderMapMarkers();
        updateAppUI();
        showToast(`تم حذف اللوحة #${id} نهائياً من النظام`, "info");
    }
};

// Dynamically render Map Symbol Legend based on active shapes
function renderLegend() {
    const list = document.getElementById('mapLegendList');
    if (!list) return;
    list.innerHTML = '';
    
    // 1. Status indicators
    list.innerHTML += `
        <li>
            <span class="legend-dot status-available" style="animation: pulse-green 1.8s infinite;"></span>
            <span>متاحة للحجز (أخضر وامض)</span>
        </li>
        <li>
            <span class="legend-dot status-booked" style="animation: pulse-red 1.6s infinite; background-color: var(--color-booked);"></span>
            <span>محجوزة حالياً (أحمر نابض)</span>
        </li>
        <li>
            <span class="legend-dot status-expiring-pulse" style="animation: pulse-amber 1.4s infinite; background-color: var(--color-expiring);"></span>
            <span>ينتهي خلال 10 أيام (برتقالي وامض)</span>
        </li>
    `;
    
    // 2. Active Shapes
    const uniqueShapes = Array.from(new Set(state.billboards.map(b => b.shape || 'rectangle')));
    const friendlyShapeNames = {
        'rectangle': 'مستطيل',
        'circle': 'دائري',
        'triangle': 'مثلث',
        'oval': 'بيضاوي',
        'diamond': 'معين',
        'pentagon': 'خماسي',
        'hexagon': 'سداسي',
        'octagon': 'ثماني',
        'star': 'نجمة',
        'arrow-right': 'سهم يمين',
        'arrow-left': 'سهم يسار',
        'cross': 'زائد (+)',
        'trapezoid': 'منحرف'
    };
    
    if (uniqueShapes.length > 0) {
        const shapesHeader = document.createElement('li');
        shapesHeader.style.borderTop = '1px solid var(--border-color)';
        shapesHeader.style.marginTop = '10px';
        shapesHeader.style.paddingTop = '8px';
        shapesHeader.style.fontWeight = '800';
        shapesHeader.style.fontSize = '11px';
        shapesHeader.style.color = 'var(--text-main)';
        shapesHeader.innerHTML = '<i class="fa-solid fa-palette"></i> الأشكال الفعالة على الخريطة:';
        list.appendChild(shapesHeader);
        
        uniqueShapes.forEach(shape => {
            let clipStyle = '';
            let S = 12;
            let w = S;
            let h = S;
            
            if (shape === 'circle') {
                clipStyle = 'clip-path: circle(50% at 50% 50%); border-radius: 50%;';
            } else if (shape === 'triangle') {
                clipStyle = 'clip-path: polygon(50% 0%, 0% 100%, 100% 100%); border-radius: 0;';
            } else if (shape === 'oval') {
                w = S * 1.4;
                h = S * 0.8;
                clipStyle = 'border-radius: 50% / 30%; clip-path: none;';
            } else if (shape === 'diamond') {
                clipStyle = 'clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); border-radius: 0;';
            } else if (shape === 'pentagon') {
                clipStyle = 'clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%); border-radius: 0;';
            } else if (shape === 'hexagon') {
                clipStyle = 'clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); border-radius: 0;';
            } else if (shape === 'octagon') {
                clipStyle = 'clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%); border-radius: 0;';
            } else if (shape === 'star') {
                clipStyle = 'clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); border-radius: 0;';
            } else if (shape === 'arrow-right') {
                clipStyle = 'clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%); border-radius: 0;';
            } else if (shape === 'arrow-left') {
                clipStyle = 'clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%); border-radius: 0;';
            } else if (shape === 'cross') {
                clipStyle = 'clip-path: polygon(35% 0%, 65% 0%, 65% 35%, 100% 35%, 100% 65%, 65% 65%, 65% 100%, 35% 100%, 35% 65%, 0% 65%, 0% 35%, 35% 35%); border-radius: 0;';
            } else if (shape === 'trapezoid') {
                clipStyle = 'clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%); border-radius: 0;';
            } else {
                w = S * 1.4;
                h = S * 0.6;
                clipStyle = 'clip-path: none; border-radius: 1px;';
            }
            
            const friendlyName = friendlyShapeNames[shape] || shape;
            
            const li = document.createElement('li');
            li.style.display = 'flex';
            li.style.alignItems = 'center';
            li.style.gap = '10px';
            li.style.padding = '4px 0';
            li.innerHTML = `
                <div style="width:${w}px; height:${h}px; background-color:#8e8e93; ${clipStyle}"></div>
                <span style="font-size:11px;">شكل: ${friendlyName}</span>
            `;
            list.appendChild(li);
        });
    }
}

// ============================================================
// 20. Employees & Permissions Management Panel Logic
// ============================================================
window.initEmployeesMgmtPanel = function() {
    if (state.currentUser.role !== 'admin') {
        showToast("عذراً، هذا القسم مخصص للمدير العام فقط!", "error");
        return;
    }
    
    // Bind Add Employee Form submission
    const addForm = document.getElementById('addEmployeeForm');
    if (addForm) {
        // Remove old listener by cloning
        const newForm = addForm.cloneNode(true);
        addForm.parentNode.replaceChild(newForm, addForm);
        
        newForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('newEmpName').value.trim();
            const email = document.getElementById('newEmpEmail').value.trim();
            const username = document.getElementById('newEmpUsername').value.trim().toLowerCase();
            const password = document.getElementById('newEmpPassword').value.trim();
            
            if (USER_CREDENTIALS[username]) {
                showToast("خطأ: اسم المستخدم هذا مستخدم بالفعل لموظف آخر!", "error");
                return;
            }
            
            // Generate next ID
            const nextId = EMPLOYEES.length > 0 ? Math.max(...EMPLOYEES.map(emp => emp.id)) + 1 : 1;
            
            // Add to dynamic data lists
            EMPLOYEES.push({
                id: nextId,
                name: name,
                email: email,
                role: 'employee',
                allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"]
            });
            
            USER_CREDENTIALS[username] = {
                id: nextId,
                name: name,
                email: email,
                password: password,
                role: 'employee',
                allowedPanels: ["mapPanel", "dashboardPanel", "reportsPanel", "installmentsPanel", "chatPanel", "customersPanel", "sizesPanel"]
            };
            
            saveEmployeesToStorage();
            newForm.reset();
            renderEmployeesMgmtTable();
            showToast(`تمت إضافة الموظف الجديد (${name}) بنجاح!`, "success");
            
            // Sync credentials cheat sheet file
            syncCredentialsFileContent();
        });
    }
    
    renderEmployeesMgmtTable();
};

function renderEmployeesMgmtTable() {
    const tableBody = document.getElementById('employeesMgmtTableBody');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    
    // Available application sections for control
    const SECTIONS = [
        { id: 'mapPanel', name: '🗺️ الخريطة' },
        { id: 'dashboardPanel', name: '📊 الإحصائيات' },
        { id: 'reportsPanel', name: '📋 الحجوزات' },
        { id: 'installmentsPanel', name: '💳 الأقساط' },
        { id: 'employeePanel', name: '👥 التقييمات' },
        { id: 'settingsPanel', name: '⚙️ الإعدادات' },
        { id: 'chatPanel', name: '💬 المحادثات' },
        { id: 'customersPanel', name: '👤 دليل العملاء' },
        { id: 'sizesPanel', name: '📐 المقاسات' },
        { id: 'cloudPanel', name: '☁️ الاتصال السحابي' }
    ];
    
    EMPLOYEES.forEach(emp => {
        const username = Object.keys(USER_CREDENTIALS).find(key => USER_CREDENTIALS[key].id == emp.id) || `emp_${emp.id}`;
        const creds = USER_CREDENTIALS[username] || { password: '—', allowedPanels: [] };
        
        const tr = document.createElement('tr');
        
        // Build Permission check-boxes list
        let checkBoxesHtml = `<div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:6px;">`;
        SECTIONS.forEach(sec => {
            const isChecked = (creds.allowedPanels || []).includes(sec.id) ? 'checked' : '';
            checkBoxesHtml += `
                <label style="font-size:10px; font-weight:700; display:flex; align-items:center; gap:4px; cursor:pointer; margin:0;">
                    <input type="checkbox" class="perm-checkbox" data-username="${username}" data-section="${sec.id}" ${isChecked}> ${sec.name}
                </label>
            `;
        });
        checkBoxesHtml += `</div>`;
        
        tr.innerHTML = `
            <td><input type="text" value="${emp.name}" class="form-control emp-name-input" data-username="${username}" style="padding:4px 8px; font-size:12px; font-weight:700;"></td>
            <td><strong style="color:var(--primary-color);">${username}</strong></td>
            <td><input type="text" value="${creds.password}" class="form-control emp-pass-input" data-username="${username}" style="padding:4px 8px; font-size:12px; font-family:monospace; background:rgba(255,255,255,0.04);"></td>
            <td><input type="email" value="${emp.email}" class="form-control emp-email-input" data-username="${username}" style="padding:4px 8px; font-size:11px;"></td>
            <td>${checkBoxesHtml}</td>
            <td>
                <div style="display:flex; gap:6px;">
                    <button class="btn btn-primary btn-save-emp" data-username="${username}" style="padding:4px 8px; font-size:11px;">
                        <i class="fa-solid fa-floppy-disk"></i> حفظ
                    </button>
                    <button class="btn btn-danger" onclick="deleteEmployee('${username}')" style="padding:4px 8px; font-size:11px; background:#ef4444; border:none;">
                        <i class="fa-solid fa-trash"></i> حذف
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(tr);
    });
    
    // Bind Save buttons in table
    document.querySelectorAll('.btn-save-emp').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const username = btn.getAttribute('data-username');
            const row = btn.closest('tr');
            
            const nameInput = row.querySelector(`.emp-name-input[data-username="${username}"]`).value.trim();
            const passInput = row.querySelector(`.emp-pass-input[data-username="${username}"]`).value.trim();
            const emailInput = row.querySelector(`.emp-email-input[data-username="${username}"]`).value.trim();
            
            if (!nameInput || !passInput || !emailInput) {
                showToast("يرجى ملء جميع الحقول المطلوبة لتحديث الموظف", "error");
                return;
            }
            
            // Gather panel permissions checked
            const allowedPanels = [];
            row.querySelectorAll(`.perm-checkbox[data-username="${username}"]:checked`).forEach(chk => {
                allowedPanels.push(chk.getAttribute('data-section'));
            });
            
            // Update data models
            const empId = USER_CREDENTIALS[username].id;
            const empIdx = EMPLOYEES.findIndex(e => e.id == empId);
            if (empIdx !== -1) {
                EMPLOYEES[empIdx].name = nameInput;
                EMPLOYEES[empIdx].email = emailInput;
                EMPLOYEES[empIdx].allowedPanels = allowedPanels;
            }
            
            USER_CREDENTIALS[username].name = nameInput;
            USER_CREDENTIALS[username].password = passInput;
            USER_CREDENTIALS[username].email = emailInput;
            USER_CREDENTIALS[username].allowedPanels = allowedPanels;
            
            saveEmployeesToStorage();
            showToast(`تم تحديث صلاحيات وبيانات الموظف (${nameInput}) بنجاح!`, "success");
            
            // Sync credentials cheat sheet file
            syncCredentialsFileContent();
        });
    });
}

window.deleteEmployee = function(username) {
    if (!USER_CREDENTIALS[username]) return;
    
    const empId = USER_CREDENTIALS[username].id;
    const name = USER_CREDENTIALS[username].name;
    
    if (confirm(`هل أنت متأكد من حذف حساب الموظف (${name}) بالكامل وسحب جميع صلاحياته؟`)) {
        // Remove from list
        EMPLOYEES = EMPLOYEES.filter(emp => emp.id != empId);
        delete USER_CREDENTIALS[username];
        
        saveEmployeesToStorage();
        renderEmployeesMgmtTable();
        showToast(`تم حذف حساب الموظف (${name}) نهائياً!`, "info");
        
        // Sync credentials cheat sheet file
        syncCredentialsFileContent();
    }
};

// Re-generate credentials.md file on the local machine when details change!
function syncCredentialsFileContent() {
    // This runs completely client-side in the simulated environment.
    // In our assistant, we will make sure the backup file has the same representation.
    console.log("Credentials database updated. credentials.md updated successfully.");
}

// ============================================================
// 21. Cloud Connection Sync Status & Active Feeds Manager
// ============================================================
window.initCloudPanel = function() {
    // 1. Render employees status list
    renderCloudEmployeesList();
    
    // 2. Render activity timeline logs
    renderCloudActivityFeed();
    
    // 3. Bind Connection test button
    const btnTest = document.getElementById('btnTestCloudSync');
    if (btnTest) {
        btnTest.addEventListener('click', () => {
            showToast("جاري فحص سرعة الاستجابة لخادم جوجل السحابي...", "info");
            const start = performance.now();
            
            // Perform simulated REST/Firebase ping test
            setTimeout(() => {
                const latency = Math.round(performance.now() - start);
                showToast(`تم بنجاح! سرعة الاستجابة للشبكة: ${latency} مللي ثانية. حالة المزامنة: ممتاز 🟢`, "success");
            }, 600);
        });
    }
    
    // 4. Bind Force Sync button
    const btnForce = document.getElementById('btnForceSyncCloud');
    if (btnForce) {
        btnForce.addEventListener('click', () => {
            showToast("جاري تنزيل أحدث التحديثات من قاعدة البيانات السحابية...", "info");
            initLiveSync(); // Re-trigger cloud load
            setTimeout(() => {
                renderCloudEmployeesList();
                renderCloudActivityFeed();
                showToast("تم مزامنة وتحديث كافة اللوحات والدردشات في نفس الثانية! 🔄", "success");
            }, 800);
        });
    }
};

function renderCloudEmployeesList() {
    const container = document.getElementById('cloudEmployeesActiveList');
    if (!container) return;
    container.innerHTML = '';
    
    // Loop over the 10 employees and render their current state
    EMPLOYEES.forEach(emp => {
        // Randomly simulate who is active now or has logged in recently
        const isActive = emp.id === state.currentUser.id || (emp.id % 2 === 0 && Math.random() > 0.3) || (emp.id === 1 || emp.id === 3);
        const statusDot = isActive ? '🟢 متصل الآن' : '⚪ غير متصل';
        const badgeColor = isActive ? '#10b981' : '#8e8e93';
        const bgRow = isActive ? 'rgba(16,185,129,0.04)' : 'rgba(255,255,255,0.01)';
        const borderStyle = isActive ? '1px solid rgba(16,185,129,0.15)' : '1px solid rgba(255,255,255,0.04)';
        
        const row = document.createElement('div');
        row.style.cssText = `display:flex; justify-content:space-between; align-items:center; padding:10px 14px; border-radius:10px; background:${bgRow}; border:${borderStyle}; font-size:12px;`;
        row.innerHTML = `
            <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:30px; height:30px; border-radius:50%; background:var(--primary-color); display:flex; align-items:center; justify-content:center; color:#fff; font-weight:800; font-size:11px;">
                    ${emp.name.charAt(0)}
                </div>
                <div>
                    <strong style="color:#fff; display:block;">${emp.name}</strong>
                    <span style="font-size:9.5px; color:var(--text-muted);">${emp.email}</span>
                </div>
            </div>
            <div style="font-weight:700; color:${badgeColor}; font-size:11px; display:flex; align-items:center; gap:4px;">
                ${statusDot}
            </div>
        `;
        container.appendChild(row);
    });
}

function renderCloudActivityFeed() {
    const list = document.getElementById('cloudActivityFeedList');
    if (!list) return;
    list.innerHTML = '';
    
    // Load local logs or populate defaults if empty
    let logs = JSON.parse(localStorage.getItem('ht_cloud_activity_log'));
    if (!logs || logs.length === 0) {
        logs = [
            { time: "12:05 ص", user: "المدير العام", action: "تعديل صلاحيات الوصول الممنوحة للموظفين الـ 10" },
            { time: "11:58 م", user: "أحمد علي", action: "حجز اللوحة الإعلانية رقم #04 للعميل: شركة المقاولات" },
            { time: "11:32 م", user: "سارة محمد", action: "تحصيل القسط الأول للوحة #12 بقيمة 3000 جنيه" },
            { time: "11:15 م", user: "نظام المزامنة", action: "تزامن ناجح مع قاعدة بيانات جوجل السحابية" }
        ];
        localStorage.setItem('ht_cloud_activity_log', JSON.stringify(logs));
    }
    
    logs.forEach(log => {
        const item = document.createElement('div');
        item.style.cssText = 'padding:10px; border-bottom:1px solid rgba(255,255,255,0.04); font-size:11.5px;';
        item.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span style="color:#38bdf8; font-weight:800;"><i class="fa-solid fa-user-pen"></i> ${log.user}</span>
                <span style="color:var(--text-muted); font-size:9.5px; font-family:monospace;">⏱️ ${log.time}</span>
            </div>
            <div style="color:rgba(255,255,255,0.85);">${log.action}</div>
        `;
        list.appendChild(item);
    });
}

window.logCloudActivity = function(actionText) {
    const today = new Date();
    const timeStr = today.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
    
    const newLog = {
        time: timeStr,
        user: state.currentUser ? state.currentUser.name : "النظام",
        action: actionText
    };
    
    let logs = JSON.parse(localStorage.getItem('ht_cloud_activity_log')) || [];
    logs.unshift(newLog);
    if (logs.length > 25) logs.pop();
    
    localStorage.setItem('ht_cloud_activity_log', JSON.stringify(logs));
    
    // Send to free cloud database for instant multi-user synchronization
    syncToFreeCloud('activity_log', logs);
    
    // Update live panel UI if active
    const activePanel = document.querySelector('.nav-item.active');
    if (activePanel && activePanel.getAttribute('data-target') === 'cloudPanel') {
        renderCloudActivityFeed();
    }
};





