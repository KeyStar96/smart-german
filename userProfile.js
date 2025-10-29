// userProfile.js - Benutzerprofilseite
document.addEventListener('DOMContentLoaded', async function() {
    // Prüfe, ob Benutzer angemeldet ist (einfache Version)
    const userId = localStorage.getItem('userId');
    if (!userId) {
        // Benutzer nicht angemeldet - zeige Login-Aufforderung
        showLoginPrompt();
        return;
    }
    
    // Lade Benutzerdaten
    await loadUserData(userId);
    
    // Lade Rechnungen
    await loadUserInvoices(userId);
    
    // Tab-Navigation einrichten
    setupTabs();
    
    // Event-Listener für Zahlungsmodal
    setupPaymentModal();
});

// Login-Aufforderung anzeigen
function showLoginPrompt() {
    const accountSection = document.querySelector('.account-section');
    if (accountSection) {
        accountSection.innerHTML = `
            <div class="container">
                <div class="login-prompt">
                    <h2>Anmeldung erforderlich</h2>
                    <p>Bitte melden Sie sich an, um Ihre Konto-Details einzusehen.</p>
                    <button class="apple-button blue" onclick="openLoginModal()">Anmelden</button>
                </div>
            </div>
        `;
    }
}

// Öffnet das Anmeldemodal (falls vorhanden)
function openLoginModal() {
    const modal = document.getElementById('anmeldeModal');
    if (modal) {
        modal.style.display = "block";
    } else {
        alert('Bitte verwenden Sie das Anmeldeformular, um sich zu registrieren.');
    }
}

// Benutzerdaten laden
async function loadUserData(userId) {
    try {
        const response = await fetch(`${window.APP_CONFIG.API_BASE_URL}/getUserProfile`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: userId })
        });
        
        if (!response.ok) throw new Error('Fehler beim Laden der Benutzerdaten');
        
        const result = await response.json();
        if (result.error) throw new Error(result.error);
        
        // Benutzerdaten anzeigen
        displayUserData(result.data);
        
    } catch (error) {
        console.error('Fehler:', error);
        showErrorMessage('Benutzerdaten konnten nicht geladen werden.');
    }
}

// Rechnungen laden
async function loadUserInvoices(userId) {
    try {
        const response = await fetch(`${window.APP_CONFIG.API_BASE_URL}/getInvoices`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: userId })
        });
        
        if (!response.ok) throw new Error('Fehler beim Laden der Rechnungen');
        
        const result = await response.json();
        if (result.error) throw new Error(result.error);
        
        // Rechnungen anzeigen
        displayInvoices(result.data);
        
    } catch (error) {
        console.error('Fehler:', error);
        showErrorMessage('Rechnungen konnten nicht geladen werden.');
    }
}

// Benutzerdaten anzeigen
function displayUserData(userData) {
    // Mitgliedschaftsstatus anzeigen
    const membershipBadge = document.querySelector('.membership-badge');
    if (!membershipBadge) return;
    
    membershipBadge.className = 'membership-badge'; // Reset
    membershipBadge.classList.add(userData.membership_status || 'inactive');
    
    // Statustext basierend auf Mitgliedschaftsstatus anpassen
    switch(userData.membership_status) {
        case 'active':
            membershipBadge.textContent = 'Aktive Mitgliedschaft';
            break;
        case 'paused':
            membershipBadge.textContent = 'Pausierte Mitgliedschaft';
            break;
        default:
            membershipBadge.textContent = 'Inaktive Mitgliedschaft';
            break;
    }
    
    // Status-Indikator aktualisieren
    const statusCircle = document.querySelector('.status-circle');
    if (statusCircle) {
        statusCircle.className = 'status-circle'; // Reset
        statusCircle.classList.add(userData.membership_status || 'inactive');
    }
    
    const statusText = document.querySelector('.status-text');
    if (statusText) {
        switch(userData.membership_status) {
            case 'active':
                statusText.textContent = 'Aktiver Status';
                break;
            case 'paused':
                statusText.textContent = 'Pausierter Status';
                break;
            default:
                statusText.textContent = 'Inaktiver Status';
                break;
        }
    }
    
    // Ablaufdatum formatieren und anzeigen
    const expiryElement = document.getElementById('membershipExpiry');
    if (expiryElement) {
        if (userData.membership_expiry) {
            const expiryDate = new Date(userData.membership_expiry);
            const formattedDate = expiryDate.toLocaleDateString('de-DE', {
                day: 'numeric', 
                month: 'long', 
                year: 'numeric'
            });
            expiryElement.textContent = formattedDate;
        } else {
            expiryElement.textContent = 'Keine Mitgliedschaft';
        }
    }
    
    // Kursliste anzeigen
    const coursesList = document.getElementById('userCoursesList');
    if (coursesList) {
        coursesList.innerHTML = ''; // Reset
        
        if (userData.courses && userData.courses.length > 0) {
            userData.courses.forEach(course => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${course.name}</span>
                    <span>${course.format}</span>
                `;
                coursesList.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = 'Keine aktiven Kurse';
            coursesList.appendChild(li);
        }
    }
}

// Rechnungen anzeigen
function displayInvoices(invoices) {
    const container = document.getElementById('invoicesContainer');
    if (!container) return;
    
    container.innerHTML = ''; // Reset
    
    if (!invoices || invoices.length === 0) {
        container.innerHTML = '<p class="empty-state">Keine Rechnungen vorhanden</p>';
        return;
    }
    
    // Tabelle erstellen
    const table = document.createElement('table');
    table.className = 'invoices-table';
    
    // Tabellenkopf
    table.innerHTML = `
        <thead>
            <tr>
                <th>Rechnungsnr.</th>
                <th>Datum</th>
                <th>Kurs</th>
                <th>Betrag</th>
                <th>Status</th>
                <th>Aktion</th>
            </tr>
        </thead>
        <tbody id="invoicesTableBody">
        </tbody>
    `;
    
    container.appendChild(table);
    const tableBody = document.getElementById('invoicesTableBody');
    
    // Rechnungen einfügen
    invoices.forEach(invoice => {
        const tr = document.createElement('tr');
        
        // Datum formatieren
        const issueDate = new Date(invoice.issue_date);
        const formattedDate = issueDate.toLocaleDateString('de-DE');
        
        // Kursname extrahieren (basierend auf der vorherigen Struktur)
        const courseName = invoice.courses ? 
            (invoice.courses.courses ? invoice.courses.courses.name : 'Unbekannter Kurs') :
            'Unbekannter Kurs';
        
        // Action Button basierend auf Status
        let actionButton = '';
        if (invoice.status === 'pending') {
            actionButton = `<button class="apple-button action-button" onclick="payInvoice(${invoice.id})">Bezahlen</button>`;
        } else if (invoice.status === 'overdue') {
            actionButton = `<button class="apple-button action-button" onclick="payInvoice(${invoice.id})">Jetzt bezahlen</button>`;
        } else if (invoice.status === 'paid') {
            actionButton = `<button class="apple-button action-button" onclick="viewInvoice(${invoice.id})">Anzeigen</button>`;
        }
        
        tr.innerHTML = `
            <td>${invoice.invoice_number}</td>
            <td>${formattedDate}</td>
            <td>${courseName}</td>
            <td>${invoice.amount.toFixed(2)} €</td>
            <td><span class="invoice-status ${invoice.status}">${getStatusText(invoice.status)}</span></td>
            <td>${actionButton}</td>
        `;
        
        tableBody.appendChild(tr);
    });
}

// Status-Text übersetzen
function getStatusText(status) {
    switch(status) {
        case 'pending': return 'Ausstehend';
        case 'paid': return 'Bezahlt';
        case 'overdue': return 'Überfällig';
        case 'cancelled': return 'Storniert';
        default: return status;
    }
}

// Rechnung bezahlen
function payInvoice(invoiceId) {
    // Zahlungsmodal öffnen
    const modal = document.getElementById('paymentModal');
    if (!modal) {
        showErrorMessage('Zahlungsmodul konnte nicht geladen werden.');
        return;
    }
    
    const invoiceIdField = document.getElementById('paymentInvoiceId');
    const invoiceReference = document.getElementById('invoiceReference');
    
    if (invoiceIdField) invoiceIdField.value = invoiceId;
    if (invoiceReference) invoiceReference.textContent = `Rechnung ${invoiceId}`;
    
    modal.style.display = 'block';
}

// Rechnung anzeigen (PDF Download oder Details)
function viewInvoice(invoiceId) {
    // Implementiere hier die Anzeige der Rechnung
    alert(`Rechnung ${invoiceId} wird angezeigt.`);
    // Hier könnte man einen PDF-Download oder eine Detailansicht implementieren
}

// Zahlungsverarbeitung
async function processPayment(invoiceId, paymentMethod) {
    try {
        const response = await fetch(`${window.APP_CONFIG.API_BASE_URL}/processPayment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                invoice_id: invoiceId,
                payment_method: paymentMethod
            })
        });
        
        if (!response.ok) throw new Error('Fehler bei der Zahlungsverarbeitung');
        
        const result = await response.json();
        if (result.error) throw new Error(result.error);
        
        // Erfolgreiche Zahlung
        showSuccessMessage('Zahlung erfolgreich verarbeitet');
        
        // Daten aktualisieren
        const userId = localStorage.getItem('userId');
        await loadUserData(userId);
        await loadUserInvoices(userId);
        
        // Modal schließen
        const modal = document.getElementById('paymentModal');
        if (modal) modal.style.display = 'none';
        
    } catch (error) {
        console.error('Fehler:', error);
        showErrorMessage('Zahlung konnte nicht verarbeitet werden: ' + error.message);
    }
}

// Zahlungsmodal einrichten
function setupPaymentModal() {
    const modal = document.getElementById('paymentModal');
    const closeBtn = modal ? modal.querySelector('.close') : null;
    const form = document.getElementById('paymentForm');
    
    if (!modal || !closeBtn || !form) return;
    
    // Schließen-Button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Außerhalb klicken
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Formular absenden
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const invoiceId = document.getElementById('paymentInvoiceId').value;
        const paymentMethod = document.querySelector('input[name="payment_method"]:checked').value;
        
        processPayment(invoiceId, paymentMethod);
    });
    
    // Zahlungsmethoden-Umschaltung
    const paymentMethods = document.querySelectorAll('input[name="payment_method"]');
    const detailsContainers = document.querySelectorAll('.payment-details');
    
    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            // Alle Details ausblenden
            detailsContainers.forEach(container => {
                container.classList.remove('active');
            });
            
            // Ausgewählte Details anzeigen
            const selectedDetails = document.getElementById(`${this.value}_details`);
            if (selectedDetails) {
                selectedDetails.classList.add('active');
            }
        });
    });
}

// Tab-Wechsel einrichten
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length === 0 || tabContents.length === 0) return;
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Aktive Klasse von allen entfernen
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Aktive Klasse für ausgewählten Tab hinzufügen
            button.classList.add('active');
            const tabId = button.dataset.tab + '-tab';
            const selectedTab = document.getElementById(tabId);
            if (selectedTab) selectedTab.classList.add('active');
        });
    });
}

// Hilfsfunktionen für Benachrichtigungen
function showSuccessMessage(message) {
    // Apple-Stil Benachrichtigung implementieren
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.innerHTML = `
        <div class="notification-icon">✓</div>
        <div class="notification-message">${message}</div>
    `;
    document.body.appendChild(notification);
    
    // Mit Animation einblenden
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Nach 4 Sekunden ausblenden
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

function showErrorMessage(message) {
    // Ähnlich wie success, aber mit Fehler-Styling
    const notification = document.createElement('div');
    notification.className = 'notification error';
    notification.innerHTML = `
        <div class="notification-icon">!</div>
        <div class="notification-message">${message}</div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Temporäre Anmelde-/Testfunktion (nur für Entwicklungszwecke)
function simulateLogin(userId) {
    localStorage.setItem('userId', userId);
    location.reload();
}