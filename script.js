// Génération d'une nouvelle adresse email temporaire
function generateNewEmail() {
    const randomString = Math.random().toString(36).substring(2, 10);
    const domain = "tempdomain.com"; // Remplacer par votre domaine plus tard
    const newEmail = `${randomString}@${domain}`;
    
    // Afficher l'adresse dans le champ input
    document.getElementById('tempEmail').value = newEmail;

    // Vider la boîte de réception
    document.getElementById('emailInbox').innerHTML = '<li>Aucun email reçu pour le moment...</li>';
}

// Copier l'adresse email dans le presse-papier
function copyEmail() {
    const emailInput = document.getElementById('tempEmail');
    emailInput.select();
    document.execCommand('copy');
    
    // Afficher la notification de copie
    const notification = document.getElementById('copyNotification');
    notification.classList.add('show');

    // Masquer la notification après 3 secondes
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Simuler la réception d'un email (à remplacer par de vraies requêtes API plus tard)
function receiveEmail(subject, from) {
    const inbox = document.getElementById('emailInbox');
    
    // Si aucun email reçu avant, vider le message par défaut
    if (inbox.children[0].innerText === 'Aucun email reçu pour le moment...') {
        inbox.innerHTML = '';
    }
    
    // Ajouter l'email à la liste
    const emailItem = document.createElement('li');
    emailItem.innerHTML = `<strong>${subject}</strong> de ${from}`;
    inbox.appendChild(emailItem);
}

// Simuler l'arrivée d'emails (pour la démo)
setTimeout(() => receiveEmail('Bienvenue sur notre site', 'contact@exemple.com'), 3000);
setTimeout(() => receiveEmail('Confirmation d\'inscription', 'admin@exemple.com'), 7000);
