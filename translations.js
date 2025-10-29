// translations.js - Übersetzungssystem für SmartGerman

const translations = {
    de: {
        // Navigation
        nav_home: "Home",
        nav_courses: "Kurse",
        nav_prices: "Preise",
        nav_about: "Über mich",
        nav_method: "Methode",
        nav_location: "Standort",
        nav_contact: "Kontakt",
        nav_account: "Mein Konto",
        nav_logout: "Abmelden",
        nav_schedule: "Stundenplan",

        day_short_mo: "Mo",
        day_short_di: "Di",
        day_short_mi: "Mi",
        day_short_do: "Do",
        day_short_fr: "Fr",

        msg_error_field_missing: 'Bitte füllen Sie das Feld "%s" aus.',
        msg_error_zip_invalid: 'Bitte geben Sie eine gültige 5-stellige PLZ ein.',
        msg_error_email_invalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        modal_register_address: "Adresse (Straße & Nr.)*",
        modal_register_zip: "PLZ*",
        modal_register_city: "Stadt*",
        
        // Hero Section
        hero_title: "Sprache & Kultur leicht gemacht",
        hero_subtitle: "Entdecken Sie die deutsche Sprache in einer modernen, unterstützenden Lernumgebung",
        hero_cta: "Jetzt anmelden",
        
        // Features Section
        features_title: "Was uns auszeichnet",
        features_subtitle: "SmartGerman bietet Ihnen einen modernen und effektiven Weg, Deutsch zu lernen",
        feature1_title: "Muttersprachliche Lehrer",
        feature1_desc: "Unsere qualifizierten Muttersprachler kombinieren professionelle Lehrerfahrung mit interkultureller Kompetenz für ein authentisches Lernerlebnis.",
        feature2_title: "Flexible Kurszeiten",
        feature2_desc: "Wir bieten Kurse zu verschiedenen Tageszeiten an, die sich Ihrem Zeitplan anpassen - auch abends und am Wochenende.",
        feature3_title: "Praxisnahe Methoden",
        feature3_desc: "Unsere interaktiven und kommunikativen Lehrmethoden fokussieren sich auf Alltagssituationen für einen schnellen und nachhaltigen Lernerfolg.",
        
        // Courses Section
        courses_title: "Unsere Kurse",
        courses_subtitle: "Entdecken Sie unsere speziell konzipierten Deutschkurse – für Senioren, Erwachsene und für junge Lernende",
        
        course_50plus_a11_title: "Deutsch 50+ A1.1",
        course_50plus_a11_desc: "Speziell für Lernende ab 50 Jahren. Langsames Lerntempo, viel Wiederholung und eine entspannte Atmosphäre für den erfolgreichen Einstieg in die deutsche Sprache.",
        
        course_50plus_a12_title: "Deutsch 50+ A1.2",
        course_50plus_a12_desc: "Aufbaukurs für Lernende mit ersten Deutschkenntnissen. Vertiefen Sie Ihre Grundlagen und erweitern Sie Ihren Wortschatz.",
        
        course_50plus_a22_title: "Deutsch A2.2",
        course_50plus_a22_desc: "Fortgeschrittenenkurs für selbstständige Kommunikation. Meistern Sie Einkaufen, Arztbesuche und Behördengänge auf Deutsch.",
        
        course_50plus_intensiv_title: "Deutsch Intensiv A1.1",
        course_50plus_intensiv_desc: "Schneller Lernerfolg durch intensive Betreuung in kleiner Gruppe. Ideal für motivierte Lernende, die zügig vorankommen möchten.",
        
        course_speaking1_title: "Sprechtraining A1.1",
        course_speaking1_desc: "Gezieltes Training der mündlichen Kommunikation. Verlieren Sie die Scheu vorm Sprechen und gewinnen Sie Selbstvertrauen im Alltag.",
        
        course_speaking2_title: "Sprechtraining A2",
        course_speaking2_desc: "Gezieltes Training der erweiterten mündlichen Kommunikation. Üben Sie in lockerer Atmosphäre und verbessern Sie Ihre Aussprache.",
        
        course_online_title: "Grundlagen der deutschen Sprache A1.1",
        course_online_desc: "Flexibler Online-Kurs mit 3 Terminen pro Woche. Lernen Sie bequem von zu Hause mit persönlichem Feedback und Telegram-Gruppe für Fragen.",

        course_gym_title: "Fit für den Deutschunterricht B1/B2",
        course_gym_desc: "Für Jugendliche ab 14 Jahren mit Deutsch als Zweitsprache. Gezieltes Training der Bildungssprache für den Deutschunterricht auf B1/B2 Niveau.",
        course_gym_content: "Lehrwerk: Prima – Ankommen im Fachunterricht",
        course_gym_topics: "Kursinhalte: Operatoren verstehen • Texte analysieren & interpretieren • Argumentationen verfassen • Bildungssprache trainieren",
        course_50plus_a21_title: "Deutsch 50+ A2.1",
        course_50plus_a21_desc: "Fortgeschrittenenkurs für selbstständige Kommunikation. Einkaufen, Arztbesuche und Behördengänge werden zum Kinderspiel.",

        course_speaking12_title: "Sprechtraining A1.2",
        course_speaking12_desc: "Aufbau-Sprechtraining für Lernende mit erweiterten A1-Kenntnissen. Üben Sie in lockerer Atmosphäre und verbessern Sie Ihre Aussprache.",

        course_children_title: "Deutsch in den Naturwissenschaften",
        course_children_desc: "Für Kinder und Jugendliche der Klassen 1-10. Fachsprachliches Deutsch für naturwissenschaftliche Fächer. Perfekt zur Unterstützung des Schulunterrichts.",
        course_children_desc_detailed: "In diesem Kurs werden Kinder und Jugendliche mit einer anderen Erstsprache als Deutsch gezielt beim Verstehen naturwissenschaftlicher Themen unterstützt. Viele Fachbegriffe in Biologie, Physik und Chemie sind komplex und unterscheiden sich stark von der Alltagssprache – selbst mit guten allgemeinen Deutschkenntnissen (z. B. B1) bleibt der Fachunterricht oft schwer verständlich.\n\nWir üben den Aufbau und die Bedeutung zentraler Fachbegriffe, das Lesen und Verstehen von Sachtexten, das Beschreiben von Experimenten und das Erklären naturwissenschaftlicher Zusammenhänge auf Deutsch.\n\nDer Unterricht findet in einer kleinen Gruppe (max. 8 Teilnehmende) statt, sodass individuell auf sprachliche und fachliche Schwierigkeiten eingegangen werden kann.\nDer Kurs wird von einer Lehrkraft geleitet, die Deutsch und Biologie studiert hat und Erfahrung im DaZ-Unterricht besitzt.", // <- NEU: Lange Beschreibung
        course_50plus_desc_detailed: "Diese Kursreihe richtet sich an Menschen ab 50 Jahren, die Deutsch in ihrem eigenen Tempo, mit passenden Methoden und in einer unterstützenden Lernatmosphäre lernen möchten.\nÄltere Lernende werden im klassischen Sprachunterricht oft übersehen – es gibt kaum Integrationskurse oder Materialien, die ihre Lebensrealität, Lernerfahrungen und Bedürfnisse wirklich berücksichtigen. Genau hier setzt dieses Kursangebot an.\n\nIch widme meine Masterarbeit an der Leibniz Universität Hannover dem Thema, wie Deutschunterricht für ältere Lernende optimiert werden kann. Dabei kombiniere ich aktuelle wissenschaftliche Erkenntnisse zum Sprachenlernen im Alter mit meiner praktischen Unterrichtserfahrung.\nEin zentraler Bestandteil meiner Arbeit und meines Unterrichts ist der bewusste Einbezug der Muttersprache, um Verständnis, Motivation und langfristigen Lernerfolg zu fördern.\n\nDas weit verbreitete Vorurteil, ältere Menschen könnten keine neue Sprache mehr lernen, ist wissenschaftlich nicht haltbar. Mit den richtigen Methoden, Geduld und gezielter Förderung können auch Menschen über 50 eine neue Sprache erfolgreich erwerben.",

        // Course Details
        course_detail_time: "pro Woche",
        course_detail_max: "Max.",
        course_detail_participants: "Teilnehmer",
        course_detail_price: "Preis:",
        course_detail_per_month: "pro Monat",
        course_detail_per_unit: "pro 45 min",
        course_detail_online: "Online via Zoom",
        course_badge_popular: "Beliebt",
        course_badge_intensive: "Intensiv",
        course_badge_online: "Online",
        course_cta: "Jetzt anmelden",
        course_badge_presence: "Präsenz",
        schedule_time_uhr: "Uhr",
        modal_register_course_select: 'Bitte wählen Sie einen Kurs',
        
        // Schedule Section
        schedule_title: "📅 Wochenplan",
        schedule_subtitle: "Filtern Sie nach Kurstyp oder sehen Sie alle Kurse auf einen Blick",
        schedule_filter_all: "Alle Kurse",
        schedule_filter_senior: "Deutsch",
        schedule_filter_speaking: "Sprechtraining",
        schedule_filter_youth: "Kurse für Jugendliche",
        schedule_filter_online: "Online",
        
        schedule_stat_courses: "Kurse sichtbar",
        schedule_stat_hours: "Unterrichtsstunden/Woche",
        schedule_stat_participants: "Teilnehmer pro Kurs",
        
        schedule_day_monday: "Montag",
        schedule_day_tuesday: "Dienstag",
        schedule_day_wednesday: "Mittwoch",
        schedule_day_thursday: "Donnerstag",
        schedule_day_friday: "Freitag",
        schedule_time_label: "Uhrzeit",
        
        schedule_info_senior_title: "Deutsch Kurse",
        schedule_info_senior_levels: "4 verschiedene Levels",
        schedule_info_senior_detail1: "A1.1 & A1.2 für Anfänger",
        schedule_info_senior_detail2: "A2.2 für Fortgeschrittene",
        schedule_info_senior_detail3: "Intensivkurs verfügbar",
        schedule_info_senior_detail4: "Max. 10-16 Teilnehmer",
        
        schedule_info_speaking_title: "Sprechtraining",
        schedule_info_speaking_slots: "2 Zeitslots verfügbar",
        schedule_info_speaking_detail1: "Dienstags 10:15-11:15",
        schedule_info_speaking_detail2: "Dienstags 11:30-12:30",
        schedule_info_speaking_detail3: "Fokus: Konversation",
        schedule_info_speaking_detail4: "Max. 12 Teilnehmer",
        
        schedule_info_youth_title: "Fit für den Deutschunterricht",
        schedule_info_youth_online: "Online-Kurs für Jugendliche B1/B2",
        schedule_info_youth_detail1: "Ab 14 Jahren (DaZ)",
        schedule_info_youth_detail2: "Donnerstags 15:00-16:00",
        schedule_info_youth_detail3: "Bildungssprache Training",
        schedule_info_youth_detail4: "Max. 8 Teilnehmer",
        
        schedule_info_online_title: "Grundlagen der deutschen Sprache A1.1",
        schedule_info_online_flexible: "Flexible Termine",
        schedule_info_online_detail1: "3x 60 min pro Woche",
        schedule_info_online_detail2: "Termine nach Absprache",
        schedule_info_online_detail3: "Telegram-Gruppe inkl.",
        schedule_info_online_detail4: "Max. 6 Teilnehmer",
        
        schedule_cta_title: "Haben Sie Ihren passenden Kurs gefunden?",
        schedule_cta_subtitle: "Melden Sie sich jetzt an oder kontaktieren Sie uns für eine persönliche Beratung",
        schedule_cta_register: "Jetzt anmelden",
        schedule_cta_consult: "Beratung anfragen",
        
        // Pricing Section
        pricing_title: "Unsere Preise",
        pricing_subtitle: "Transparente und faire Preise für Ihre Sprachausbildung",
        
        pricing_senior_title: "Senioren",
        pricing_senior_period: "/ Monat",
        pricing_senior_note: "4x 45 min pro Woche",
        pricing_senior_feature1: "Standardkurse A1.1, A1.2, A2.2",
        pricing_senior_feature2: "Speziell für Lernende ab 50",
        pricing_senior_feature3: "Langsames Lerntempo",
        pricing_senior_feature4: "Max. 16 Teilnehmer",
        pricing_senior_feature5: "2,50€ pro 45 Minuten",
        
        pricing_special_title: "Intensiv & Spezial",
        pricing_special_period: "/ Monat",
        pricing_special_note: "Je nach Kursformat",
        pricing_special_feature1: "Intensivkurs 50+: 60€/Monat (3x60min)",
        pricing_special_feature2: "Sprechtraining: 20€/Monat (1x60min)",
        pricing_special_feature3: "Kleine Gruppen (10-12 TN)",
        pricing_special_feature4: "Individuelle Betreuung",
        pricing_special_feature5: "Gezieltes Training",
        
        pricing_youth_title: "Jugendliche & Online",
        pricing_youth_period: "/ Monat",
        pricing_youth_note: "1x 60 min pro Woche",
        pricing_youth_feature1: "Fit für Deutschunterricht B1/B2: 15€ pro 90 min",
        pricing_youth_feature2: "Grundlagen der deutschen Sprache A1.1: 10€ pro 60 min",
        pricing_youth_feature3: "Max. 6-8 Teilnehmer",
        pricing_youth_feature4: "Online via Zoom",
        pricing_youth_feature5: "Persönliches Feedback",
        
        schedule_50plus_a21: "Deutsch A2.1",
        schedule_speaking_a11: "Sprechtraining A1.1",
        schedule_speaking_a12: "Sprechtraining A1.2",
        schedule_speaking_a2: "Sprechtraining A2",
        schedule_children: "Deutsch in den Naturwissenschaften",
        schedule_online_basics: "Grundlagen der deutschen Sprache A1.1",
        schedule_youth: "Fit für den Deutschunterricht B1/B2",

        pricing_cta: "Auswählen",

        // Transparente Preisgestaltung
        pricing_transparency_title: "Transparente Preisgestaltung",
        pricing_transparency_intro: "Unsere Kurse werden monatlich abgerechnet. Der Preis richtet sich nach der Anzahl der tatsächlich stattfindenden Unterrichtseinheiten im jeweiligen Monat.",
        pricing_examples_title: "Preisbeispiele",
        pricing_example_4: "Monat mit 4 Einheiten: 48€",
        pricing_example_5: "Monat mit 5 Einheiten: 60€",
               
        pricing_example_typical: "Typischer Monat",
        pricing_example_typical_desc: "Die Anzahl der Kurstermine variiert je nach Monat (z.B. durch Feiertage oder Monatslänge).", // <-- Geändert
        pricing_example_specific_title: "Konkretes Beispiel", // <-- Neuer Key
        pricing_example_course_info: "Kurs: Deutsch 50+ A1.1 (2,50€ / 45 Min. Einheit)", // <-- Neuer Key
        pricing_example_course_calc: "Monat mit 8 Terminen (16 Einheiten): 40€\nMonat mit 9 Terminen (18 Einheiten): 45€", // <-- Neuer Key
        pricing_fairness_title: "Fair & Transparent",
        pricing_fairness_desc: "Sie bezahlen nur für tatsächlich stattfindende Einheiten. Feiertage und Ferien werden berücksichtigt.",
        
        // About Section
        owner_name: "Anastasia Sitov",
        about_title: "Über mich",
        about_p1: "Mein Name ist Anastasia Sitov, und meine Leidenschaft gilt dem Unterrichten von Deutsch als Zweitsprache. Ich bin zweisprachig mit Russisch und Deutsch aufgewachsen und habe bereits während meines Studiums gemerkt, wie wichtig es ist, Sprache verständlich und praxisnah zu vermitteln.",
        about_p2: "Mir wurde oft berichtet, dass Sprachkurse in Deutschland für viele Lernende zu schnell sind und die Erklärungen zu komplex ausfallen. Deshalb habe ich es mir zur Aufgabe gemacht, Deutsch so zu unterrichten, dass meine Teilnehmenden in ihrem eigenen Tempo lernen können – ohne den Druck, sofort große Mengen an Informationen verarbeiten zu müssen. Dabei setze ich auf verständliche Erklärungen in der Herkunftssprache der Lernenden, um ihnen den Einstieg in die deutsche Sprache zu erleichtern.",
        
        // Method Section
        method_title: "Unsere Methode",
        method_subtitle: "Bei SmartGerman setzen wir auf einen praxisorientierten Ansatz, der Ihnen hilft, die deutsche Sprache schnell und effektiv zu erlernen",
        method1_title: "Kommunikativ",
        method1_desc: "Unser Fokus liegt auf praktischer Kommunikation und Alltagssituationen. Sie lernen genau das, was Sie für Ihr Leben in Deutschland wirklich brauchen.",
        method2_title: "Interaktiv",
        method2_desc: "Durch lebendige Übungen und Rollenspiele verbessern Sie Ihre Sprach- und Hörfähigkeiten in einer dynamischen Lernumgebung.",
        method3_title: "Kulturell",
        method3_desc: "Wir vermitteln nicht nur Sprache, sondern auch wertvolle Einblicke in die deutsche Kultur und bieten praktische Orientierungshilfen für den Alltag.",
        
        // Location Section
        location_title: "Unser Standort",
        location_subtitle: "Besuchen Sie uns beim Ukrainischen Verein in Niedersachsen e.V. in Hannover",
        location_address_title: "Adresse",
        location_address_company: "SmartGerman Sprachschule",
        location_address_at: "beim Ukrainischen Verein in Niedersachsen e.V.",
        location_address_street: "Königstraße 20",
        location_address_city: "30175 Hannover",
        location_hours_title: "Öffnungszeiten:",
        location_hours_weekday: "Montag - Freitag: 9:00 - 17:30 Uhr",
        location_hours_saturday: "Samstag: Nach Vereinbarung",
        location_hours_sunday: "Sonntag: Geschlossen",
        
        location_transit_title: "Anfahrt",
        location_transit_public: "Mit öffentlichen Verkehrsmitteln:",
        location_transit_line1: "Stadtbahn Linie 1, 2, 8 - Haltestelle \"Schlägerstraße\"",
        location_transit_line2: "Stadtbahn Linie 10 - Haltestelle \"Königstraße\"",
        location_transit_car: "Mit dem Auto:",
        location_transit_parking1: "Parkplätze in der Umgebung vorhanden.",
        location_transit_parking2: "Parkmöglichkeiten in nahegelegenen Straßen",
        schedule_course_location: "Königstraße 20",
        
        // CTA Section
        cta_title: "Bereit, Ihre Deutschkenntnisse zu verbessern?",
        cta_subtitle: "Melden Sie sich noch heute an und starten Sie Ihre Sprachreise mit SmartGerman",
        cta_button: "Jetzt anmelden",
        
        // Footer
        footer_about: "SmartGerman bietet maßgeschneiderte Deutschkurse für Neuankömmlinge in Deutschland. Wir machen Sprache und Kultur leicht zugänglich und fördern die Integration.",
        footer_quicklinks: "Schnellzugriff",
        footer_contact: "Kontakt",
        footer_hours: "Öffnungszeiten",
        footer_hours_weekday: "Mo-Fr: 9:00 - 20:00 Uhr",
        footer_hours_saturday: "Sa: 10:00 - 15:00 Uhr",
        footer_hours_sunday: "So: Geschlossen",
        footer_copyright: "Copyright © 2025 SmartGerman. Alle Rechte vorbehalten.",
        footer_privacy: "Datenschutzerklärung",
        footer_imprint: "Impressum",
        
        // Registration Modal
        modal_register_title: "Jetzt für einen Deutschkurs anmelden",
        modal_register_firstname: "Vorname*",
        modal_register_lastname: "Nachname*",
        modal_register_email: "E-Mail*",
        modal_register_phone: "Telefon",
        modal_register_course: "Kurs*",
        modal_register_course_select: "Bitte wählen",
        modal_register_level_title: "Sprachniveau",
        modal_register_level1: "Keine Vorkenntnisse",
        modal_register_level2: "Grundkenntnisse vorhanden",
        modal_register_level3: "Nicht sicher (Einstufungstest erwünscht)",
        modal_register_info: "Weitere Informationen oder Fragen",
        modal_register_consent: "Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert und verwendet werden.*",
        modal_register_submit: "Anmeldung absenden",
        modal_register_required: "* Pflichtfelder",
        modal_register_note: "Nach Eingang deiner Anmeldung kontaktieren wir dich innerhalb von 24 Stunden für weitere Informationen und zur Terminvereinbarung.",
        
        // Login Modal
        modal_login_title: "Anmelden",
        modal_login_email: "E-Mail-Adresse*",
        modal_login_password: "Passwort*",
        modal_login_forgot: "Passwort vergessen?",
        modal_login_submit: "Anmelden",
        modal_login_no_account: "Noch kein Konto?",
        modal_login_register: "Jetzt registrieren",
        
        // Account Section
        account_title: "Mein Konto",
        account_welcome: "Willkommen",
        account_not_logged_in: "Nicht angemeldet",
        account_login_required: "Anmeldung erforderlich",
        account_login_text: "Bitte melden Sie sich mit Ihren Zugangsdaten an, um Ihre Konto-Details einzusehen.",
        account_login_button: "Anmelden",
        account_register_button: "Registrieren",
        account_login_note: "Nach der Registrierung erhalten Sie Ihre Zugangsdaten per E-Mail.",
        
        account_tab_overview: "Übersicht",
        account_tab_profile: "Profil bearbeiten",
        account_tab_courses: "Meine Kurse",
        account_tab_invoices: "Rechnungen",
        account_tab_messages: "Nachrichten",
        account_tab_settings: "Einstellungen",
        account_tab_community: "Community",
        
        // Messages
        msg_success_register: "Vielen Dank für Ihre Anmeldung! Sie erhalten in Kürze eine E-Mail mit Ihren Zugangsdaten.",
        msg_success_login: "Erfolgreich angemeldet!",
        msg_success_logout: "Sie wurden erfolgreich abgemeldet.",
        msg_error_login: "Login fehlgeschlagen",
        msg_error_fields: "Bitte füllen Sie alle Pflichtfelder aus.",
        msg_loading_courses: "Kurse werden geladen...",

        // Kontakt
        contact_phone: "Telefon",
        contact_email: "E-Mail",

        footer_agb: 'AGB',
        modal_register_agb_accept: 'Ich habe die',
        modal_register_agb_link: 'AGB',
        modal_register_agb_accept_end: 'gelesen und akzeptiere diese.*',
        modal_register_agb_error: 'Bitte akzeptieren Sie die AGB.',

        // Datenschutz
        privacy_title: "Datenschutzerklärung",
        privacy_updated: "Stand: März 2025",
        privacy_responsible_title: "1. Verantwortliche Stelle",
        privacy_responsible_text: "Verantwortlich für die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:",
        privacy_company_name: "SmartGerman Sprachschule",
        privacy_data_title: "2. Erhebung und Verarbeitung personenbezogener Daten",
        privacy_data_intro: "Personenbezogene Daten sind Informationen, die dazu genutzt werden können, Ihre Identität zu erfahren. Darunter fallen Informationen wie Ihr richtiger Name, Adresse, Postanschrift oder Telefonnummer. Wir erheben, verarbeiten und nutzen personenbezogene Daten nur dann, wenn sie zur Erbringung unserer Dienstleistungen erforderlich sind oder Sie uns diese freiwillig zur Verfügung gestellt haben.",
        privacy_website_title: "2.1 Besuch unserer Website",
        privacy_website_text: "Beim Besuch unserer Website erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten:",
        privacy_website_list_item1: "IP-Adresse",
        privacy_website_list_item2: "Datum und Uhrzeit der Anfrage",
        privacy_website_list_item3: "Zeitzonendifferenz zur Greenwich Mean Time (GMT)",
        privacy_website_list_item4: "Inhalt der Anforderung (konkrete Seite)",
        privacy_website_list_item5: "Zugriffsstatus/HTTP-Statuscode",
        privacy_website_list_item6: "Jeweils übertragene Datenmenge",
        privacy_website_list_item7: "Website, von der die Anforderung kommt",
        privacy_website_list_item8: "Browser",
        privacy_website_list_item9: "Betriebssystem und dessen Oberfläche",
        privacy_website_list_item10: "Sprache und Version der Browsersoftware",
        privacy_contact_title: "2.3 Anmeldung zu Kursen",
        privacy_contact_text: "Wenn Sie sich für einen unserer Kurse anmelden, erheben wir folgende Daten:",
        privacy_registration_list_item1: "Name und Vorname",
        privacy_registration_list_item2: "Kontaktdaten (E-Mail, Telefon)",
        privacy_registration_list_item3: "Gewünschter Kurs und Kursformat",
        privacy_registration_list_item4: "Sprachniveau",
        privacy_registration_list_item5: "Weitere Informationen, die Sie uns freiwillig mitteilen",
        privacy_cookies_title: "3. Cookies",
        privacy_cookies_intro: "Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die bestimmte Einstellungen und Daten zum Austausch mit unserem System über Ihren Browser speichern.",
        privacy_rights_title: "4. Ihre Rechte",
        privacy_rights_intro: "Sie haben folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:",
        privacy_rights_list_item1: "Recht auf Auskunft",
        privacy_rights_list_item2: "Recht auf Berichtigung oder Löschung",
        privacy_rights_list_item3: "Recht auf Einschränkung der Verarbeitung",
        privacy_rights_list_item4: "Recht auf Widerspruch gegen die Verarbeitung",
        privacy_rights_list_item5: "Recht auf Datenübertragbarkeit",
        privacy_changes_title: "5. Änderungen der Datenschutzerklärung",
        privacy_changes_text: "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.",
        back_to_home: "Zurück zur Startseite",

        modal_register_privacy_accept: 'Ich stimme zu, dass meine Daten gemäß der',
        modal_register_privacy_link: 'Datenschutzerklärung',
        modal_register_privacy_accept_end: 'zur Bearbeitung meiner Anfrage gespeichert und verwendet werden.*',

        // Impressum
        imprint_title: "Impressum",
        imprint_info_title: "Angaben gemäß § 5 TMG",
        imprint_represented_title: "Vertreten durch",
        imprint_represented_note: "[Bitte ersetzen Sie dies durch den tatsächlichen Namen des Geschäftsführers/Inhabers]",
        imprint_contact_title: "Kontakt",
        imprint_vat_title: "Umsatzsteuer-ID",
        imprint_vat_text: "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:",
        imprint_vat_note: "[Bitte ersetzen Sie dies durch Ihre tatsächliche USt-ID]",
        imprint_profession_title: "Berufsbezeichnung und berufsrechtliche Regelungen",
        imprint_profession_text: "Berufsbezeichnung: Sprachschule",
        imprint_authority: "Zuständige Aufsichtsbehörde: [Bitte ergänzen Sie die für Sie zuständige Behörde]",
        imprint_dispute_title: "Streitschlichtung",
        imprint_dispute_text: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
        imprint_dispute_note: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        imprint_liability_content_title: "Haftung für Inhalte",
        imprint_liability_links_title: "Haftung für Links",
        imprint_copyright_title: "Urheberrecht",

        // CV
        about_cv_button: "Mein Werdegang",
        cv_modal_title: "Werdegang von Anastasia Sitov",
        cv_education_title: "Bildungsweg",
        cv_experience_title: "Praxiserfahrung",
        cv_skills_title: "Weitere Kenntnisse",
        cv_skills_languages_title: "Sprachen",
        cv_skills_daz_title: "Deutsch als Zweit- und Fremdsprache",
        cv_modal_close: "Schließen",
        cv_education_item2_date: "2010 – 2018",
        cv_education_item2_desc: "Gymnasium Stolzenau",
        cv_education_item3_date: "2018 – 2022",
        cv_education_item3_desc: "Leibniz Universität Hannover, fächerübergreifender Bachelor in Biologie (Major) und Deutsch (Minor) - Abschluss: Bachelor of Science",
        cv_education_item5_date: "Seit 10/2022",
        cv_education_item5_desc: "Masterstudium Lehramt an der Leibniz Universität Hannover (Angestrebter Abschluss: Master of Education)",
        cv_experience_item1_date: "09/2020 – 09/2022",
        cv_experience_item1_desc: "Nachhilfelehrerin in der Lister Lernmeile",
        cv_experience_item4_date: "10/2022 – 07/2023",
        cv_experience_item4_desc: "Sprachlehrerin einer ukrainischen Willkommensklasse an der Elsa-Brändström-Schule Hannover",
        cv_experience_item5_date: "Seit 09/2023",
        cv_experience_item5_desc: "Kursleiterin Deutsch im Ukrainischen Verein in Niedersachsen e.V.",
        cv_experience_item6_date: "10/2023 – 07/2025",
        cv_experience_item6_desc: "Studentische Hilfskraft an der Leibniz Universität Hannover im Bereich Deutsch als Fremd- und Zweitsprache",
        cv_skills_languages_item1: "Deutsch (Muttersprache)",
        cv_skills_languages_item2: "Russisch (Muttersprache)",
        cv_skills_languages_item3: "Englisch (fließend in Wort und Schrift)",
        cv_skills_languages_item4: "Französisch (Grundkenntnisse)",
        cv_skills_languages_item5: "Türkisch (in Vorbereitung auf A2-Zertifizierung; A1 abgeschlossen)",
        cv_skills_daz_item1: "Erwerb der Bescheinigung 'internationaler und interkultureller Kompetenzen Lehramt: Mehrsprachigkeit und Bildung' an der Leibniz Universität Hannover."
    },
    
    ru: {
        // Navigation
        nav_home: "Главная",
        nav_courses: "Курсы",
        nav_prices: "Цены",
        nav_about: "Обо мне",
        nav_method: "Методика",
        nav_location: "Место",
        nav_contact: "Контакты",
        nav_account: "Мой аккаунт",
        nav_logout: "Выйти",
        nav_schedule: "Расписание",

        day_short_mo: "Пн",
        day_short_di: "Вт",
        day_short_mi: "Ср",
        day_short_do: "Чт",
        day_short_fr: "Пт",

        modal_register_address: "Адрес (Улица и №)*",
        modal_register_zip: "Индекс*",
        modal_register_city: "Город*",
        msg_error_field_missing: 'Пожалуйста, заполните поле "%s".',
        msg_error_zip_invalid: 'Пожалуйста, введите действительный 5-значный почтовый индекс.',
        msg_error_email_invalid: 'Пожалуйста, введите действительный адрес электронной почты.',
        
        // Hero Section
        hero_title: "Язык и культура - просто!",
        hero_subtitle: "Откройте для себя немецкий язык в современной и поддерживающей учебной среде",
        hero_cta: "Записаться сейчас",
        
        // Features Section
        features_title: "Что нас отличает",
        features_subtitle: "SmartGerman предлагает вам современный и эффективный способ изучения немецкого языка",
        feature1_title: "Носители языка",
        feature1_desc: "Наши квалифицированные носители языка сочетают профессиональный опыт преподавания с межкультурной компетентностью для аутентичного обучения.",
        feature2_title: "Гибкое расписание",
        feature2_desc: "Мы предлагаем курсы в разное время суток, которые адаптируются к вашему графику - также вечером и в выходные.",
        feature3_title: "Практические методы",
        feature3_desc: "Наши интерактивные и коммуникативные методы обучения фокусируются на повседневных ситуациях для быстрого и устойчивого результата.",
        
        // Courses Section
        courses_title: "Наши курсы",
        courses_subtitle: "Откройте для себя наши специально разработанные курсы немецкого языка - для пожилых людей, взрослых и молодых учащихся",
        
        course_50plus_a11_title: "Немецкий 50+ A1.1",
        course_50plus_a11_desc: "Специально для учащихся от 50 лет. Медленный темп обучения, много повторений и спокойная атмосфера для успешного начала изучения немецкого языка.",
        
        course_50plus_a12_title: "Немецкий 50+ A1.2",
        course_50plus_a12_desc: "Продолжающий курс для учащихся с первыми знаниями немецкого. Углубите свои основы и расширьте словарный запас.",
        
        course_50plus_a22_title: "Немецкий A2.2",
        course_50plus_a22_desc: "Продвинутый курс для самостоятельного общения. Освойте покупки, визиты к врачу и общение с госучреждениями на немецком языке.",
        
        course_50plus_intensiv_title: "Немецкий Интенсив A1.1",
        course_50plus_intensiv_desc: "Быстрый успех благодаря интенсивному обучению в небольшой группе. Идеально для мотивированных учащихся, которые хотят быстро прогрессировать.",
        
        course_speaking1_title: "Разговорная практика A1.1",
        course_speaking1_desc: "Целенаправленная тренировка устной речи. Преодолейте страх перед разговором и обретите уверенность в повседневном общении.",
        
        course_speaking2_title: "Разговорная практика A2",
        course_speaking2_desc: "Целенаправленное обучение расширенной устной коммуникации. Практикуйтесь в непринужденной атмосфере и улучшайте произношение.",
        
        course_online_title: "База немецкого языка A1.1",
        course_online_desc: "Гибкий онлайн-курс с 3 занятиями в неделю. Учитесь удобно из дома с личной обратной связью и группой в Telegram для вопросов.",

        course_gym_title: "Готовность к урокам немецкого B1/B2",
        course_gym_desc: "Для подростков от 14 лет с немецким как вторым языком. Целенаправленная тренировка образовательного языка для уроков немецкого на уровне B1/B2.",
        course_gym_content: "Учебник: Prima – Ankommen im Fachunterricht",
        course_gym_topics: "Содержание курса: Понимание операторов • Анализ и интерпретация текстов • Написание аргументаций • Тренировка образовательного языка",
        course_50plus_a21_title: "Немецкий 50+ A2.1",
        course_50plus_a21_desc: "Продвинутый курс для самостоятельного общения. Покупки, визиты к врачу и общение с госучреждениями на немецком языке.",

        course_speaking12_title: "Разговорная практика A1.2",
        course_speaking12_desc: "Продвинутая разговорная практика для учащихся с расширенными знаниями уровня A1. Практикуйтесь в непринужденной атмосфере и улучшайте произношение.",

        course_children_title: "Немецкий в естественных науках",
        course_children_desc: "Для детей и подростков 1-10 классов. Специализированный немецкий для естественнонаучных предметов. Идеально для поддержки школьных занятий.",
        course_children_desc_detailed: "В этом курсе дети и подростки, для которых немецкий не является родным языком, получают целенаправленную поддержку в понимании естественнонаучных тем. Многие специальные термины в биологии, физике и химии сложны и сильно отличаются от повседневного языка – даже при хорошем общем знании немецкого (например, B1) уроки по предметам часто остаются трудными для понимания.\n\nМы тренируем структуру и значение ключевых специальных терминов, чтение и понимание научных текстов, описание экспериментов и объяснение естественнонаучных связей на немецком языке.\n\nЗанятия проходят в небольшой группе (макс. 8 участников), что позволяет индивидуально подходить к языковым и предметным трудностям.\nКурс ведет преподаватель, изучавший немецкий язык и биологию и имеющий опыт преподавания немецкого как второго языка (DaZ).", // <- НОВОЕ: Длинное описание
        course_50plus_desc_detailed: "Эта серия курсов предназначена для людей старше 50 лет, которые хотят изучать немецкий язык в своем собственном темпе, с подходящими методами и в поддерживающей учебной атмосфере.\nПожилых учащихся часто упускают из виду в классическом языковом обучении – почти нет интеграционных курсов или материалов, которые действительно учитывали бы их жизненные реалии, опыт обучения и потребности. Именно здесь и начинается это предложение курсов.\n\nЯ посвящаю свою магистерскую диссертацию в Ганноверском университете имени Лейбница теме оптимизации преподавания немецкого языка для пожилых учащихся. При этом я сочетаю актуальные научные данные об изучении языков в пожилом возрасте со своим практическим опытом преподавания.\nЦентральным компонентом моей работы и моего преподавания является сознательное включение родного языка для содействия пониманию, мотивации и долгосрочному успеху в обучении.\n\nШироко распространенное предубеждение о том, что пожилые люди больше не могут выучить новый язык, научно необоснованно. С правильными методами, терпением и целенаправленной поддержкой люди старше 50 лет также могут успешно освоить новый язык.",

        // Course Details
        course_detail_time: "в неделю",
        course_detail_max: "Макс.",
        course_detail_participants: "участников",
        course_detail_price: "Цена:",
        course_detail_per_month: "в месяц",
        course_detail_per_unit: "за занятие",
        course_detail_online: "Онлайн через Zoom",
        course_badge_popular: "Популярный",
        course_badge_intensive: "Интенсив",
        course_badge_online: "Онлайн",
        course_cta: "Записаться",
        course_badge_presence: "Очно",
        schedule_time_uhr: "ч",
        modal_register_course_select: 'Пожалуйста, выберите курс',
        
        // Schedule Section
        schedule_title: "📅 Расписание на неделю",
        schedule_subtitle: "Фильтруйте по типу курса или просматривайте все курсы сразу",
        schedule_filter_all: "Все курсы",
        schedule_filter_senior: "Немецкий",
        schedule_filter_speaking: "Разговорная практика",
        schedule_filter_youth: "Курсы для молодежи",
        schedule_filter_online: "Онлайн",
        
        schedule_stat_courses: "Курсов видимо",
        schedule_stat_hours: "Учебных часов/неделю",
        schedule_stat_participants: "Участников на курс",
        
        schedule_day_monday: "Понедельник",
        schedule_day_tuesday: "Вторник",
        schedule_day_wednesday: "Среда",
        schedule_day_thursday: "Четверг",
        schedule_day_friday: "Пятница",
        schedule_time_label: "Время",
        
        schedule_info_senior_title: "Курсы Немецкий",
        schedule_info_senior_levels: "4 разных уровня",
        schedule_info_senior_detail1: "A1.1 & A1.2 для начинающих",
        schedule_info_senior_detail2: "A2.2 для продолжающих",
        schedule_info_senior_detail3: "Интенсивный курс доступен",
        schedule_info_senior_detail4: "Макс. 10-16 участников",
        
        schedule_info_speaking_title: "Разговорная практика",
        schedule_info_speaking_slots: "2 временных слота доступны",
        schedule_info_speaking_detail1: "Вторник 10:15-11:15",
        schedule_info_speaking_detail2: "Вторник 11:30-12:30",
        schedule_info_speaking_detail3: "Фокус: Разговор",
        schedule_info_speaking_detail4: "Макс. 12 участников",
        
        schedule_info_youth_title: "Готовность к урокам немецкого",
        schedule_info_youth_online: "Онлайн-курс для подростков B1/B2",
        schedule_info_youth_detail1: "От 14 лет (DaZ)",
        schedule_info_youth_detail2: "Четверг 15:00-16:00",
        schedule_info_youth_detail3: "Тренировка образовательного языка",
        schedule_info_youth_detail4: "Макс. 8 участников",
        
        schedule_info_online_title: "База немецкого языка A1.1",
        schedule_info_online_flexible: "Гибкое расписание",
        schedule_info_online_detail1: "3x 60 мин в неделю",
        schedule_info_online_detail2: "Время по договоренности",
        schedule_info_online_detail3: "Группа Telegram вкл.",
        schedule_info_online_detail4: "Макс. 6 участников",
        
        schedule_cta_title: "Нашли подходящий курс?",
        schedule_cta_subtitle: "Запишитесь сейчас или свяжитесь с нами для личной консультации",
        schedule_cta_register: "Записаться",
        schedule_cta_consult: "Запросить консультацию",
        
        schedule_50plus_a21: "Немецкий A2.1",
        schedule_speaking_a11: "Разговорная практика A1.1",
        schedule_speaking_a12: "Разговорная практика A1.2",
        schedule_speaking_a2: "Разговорная практика A2",
        schedule_children: "Немецкий в естественных науках",
        schedule_online_basics: "База немецкого языка A1.1",
        schedule_youth: "Готовность к урокам немецкого B1/B2",

        // Pricing Section
        pricing_title: "Наши цены",
        pricing_subtitle: "Прозрачные и справедливые цены на ваше языковое образование",
        
        pricing_senior_title: "Люди",
        pricing_senior_period: "/ месяц",
        pricing_senior_note: "4x 45 мин в неделю",
        pricing_senior_feature1: "Стандартные курсы A1.1, A1.2, A2.2",
        pricing_senior_feature2: "Специально для учащихся от 50",
        pricing_senior_feature3: "Медленный темп обучения",
        pricing_senior_feature4: "Макс. 16 участников",
        pricing_senior_feature5: "2,50€ за 45 минут",
        
        pricing_special_title: "Интенсив и Специальные",
        pricing_special_period: "/ месяц",
        pricing_special_note: "В зависимости от формата курса",
        pricing_special_feature1: "Интенсив 50+: 60€/месяц (3x60мин)",
        pricing_special_feature2: "Разговорная практика: 20€/месяц (1x60мин)",
        pricing_special_feature3: "Небольшие группы (10-12 уч.)",
        pricing_special_feature4: "Индивидуальное обучение",
        pricing_special_feature5: "Целенаправленная тренировка",
        
        pricing_youth_title: "Молодёжь и Онлайн",
        pricing_youth_period: "/ месяц",
        pricing_youth_note: "1x 60 мин в неделю",
        pricing_youth_feature1: "Подготовка к гимназии: 48€/месяц",
        pricing_youth_feature2: "Онлайн-интенсив: 10€ за занятие",
        pricing_youth_feature3: "Макс. 6-8 участников",
        pricing_youth_feature4: "Онлайн через Zoom",
        pricing_youth_feature5: "Личная обратная связь",
        
        pricing_cta: "Выбрать",

        // Прозрачное ценообразование
        pricing_transparency_title: "Прозрачное ценообразование",
        pricing_transparency_intro: "Наши курсы оплачиваются ежемесячно. Цена зависит от количества фактически проведенных занятий в соответствующем месяце.",
        pricing_examples_title: "Примеры цен",
        pricing_example_4: "Месяц с 4 занятиями: 48€",
        pricing_example_5: "Месяц с 5 занятиями: 60€",
        
        pricing_example_typical: "Типичный месяц",
        pricing_example_typical_desc: "Количество занятий варьируется в зависимости от месяца (например, из-за праздников или продолжительности месяца).", // <-- Изменено
        pricing_example_specific_title: "Конкретный пример", // <-- Новый ключ
        pricing_example_course_info: "Курс: Немецкий 50+ A1.1 (2,50€ / 45 мин. занятие)", // <-- Новый ключ
        pricing_example_course_calc: "Месяц с 8 занятиями (16 единиц): 40€\nМесяц с 9 занятиями (18 единиц): 45€", // <-- Новый ключ
        pricing_fairness_title: "Честно и прозрачно",
        pricing_fairness_desc: "Вы платите только за фактически проведенные занятия. Праздничные дни и каникулы учитываются.",

        // About Section
        owner_name: "Анастасия Ситов",
        about_title: "Обо мне",
        about_p1: "Меня зовут Анастасия Ситов, и моя страсть - преподавание немецкого языка как второго. Я выросла двуязычной с русским и немецким языками и уже во время учёбы поняла, как важно преподавать язык понятно и практично.",
        about_p2: "Мне часто рассказывали, что языковые курсы в Германии для многих учащихся слишком быстрые, а объяснения слишком сложные. Поэтому я поставила перед собой задачу преподавать немецкий так, чтобы мои учащиеся могли учиться в своём собственном темпе - без давления сразу обрабатывать большие объёмы информации. При этом я использую понятные объяснения на родном языке учащихся, чтобы облегчить им вход в немецкий язык.",
        
        // Method Section
        method_title: "Наша методика",
        method_subtitle: "В SmartGerman мы используем практико-ориентированный подход, который поможет вам быстро и эффективно изучить немецкий язык",
        method1_title: "Коммуникативно",
        method1_desc: "Наш фокус на практическом общении и повседневных ситуациях. Вы изучаете именно то, что действительно нужно для жизни в Германии.",
        method2_title: "Интерактивно",
        method2_desc: "Благодаря живым упражнениям и ролевым играм вы улучшаете свои языковые навыки и навыки восприятия на слух в динамичной учебной среде.",
        method3_title: "Культурно",
        method3_desc: "Мы передаём не только язык, но и ценные знания о немецкой культуре и предлагаем практическую помощь в ориентации в повседневной жизни.",
        
        // Location Section
        location_title: "Наше местоположение",
        location_subtitle: "Посетите нас в Украинском обществе в Нижней Саксонии e.V. в Ганновере",
        location_address_title: "Адрес",
        location_address_company: "Языковая школа SmartGerman",
        location_address_at: "при Украинском обществе в Нижней Саксонии e.V.",
        location_address_street: "Königstraße 20",
        location_address_city: "30175 Hannover",
        location_hours_title: "Часы работы:",
        location_hours_weekday: "Понедельник - Пятница: 9:00 - 17:30",
        location_hours_saturday: "Суббота: По договорённости",
        location_hours_sunday: "Воскресенье: Закрыто",
        
        location_transit_title: "Как добраться",
        location_transit_public: "На общественном транспорте:",
        location_transit_line1: "Трамвай линии 1, 2, 8 - остановка \"Schlägerstraße\"",
        location_transit_line2: "Трамвай линии 10 - остановка \"Königstraße\"",
        location_transit_car: "На машине:",
        location_transit_parking1: "Парковка в округе имеется.",
        location_transit_parking2: "Возможности парковки на близлежащих улицах",
        schedule_course_location: "Königstraße 20",
        
        // CTA Section
        cta_title: "Готовы улучшить свои знания немецкого?",
        cta_subtitle: "Запишитесь уже сегодня и начните своё языковое путешествие со SmartGerman",
        cta_button: "Записаться сейчас",
        
        // Footer
        footer_about: "SmartGerman предлагает индивидуальные курсы немецкого языка для новоприбывших в Германию. Мы делаем язык и культуру легкодоступными и способствуем интеграции.",
        footer_quicklinks: "Быстрые ссылки",
        footer_contact: "Контакты",
        footer_hours: "Часы работы",
        footer_hours_weekday: "Пн-Пт: 9:00 - 20:00",
        footer_hours_saturday: "Сб: 10:00 - 15:00",
        footer_hours_sunday: "Вс: Закрыто",
        footer_copyright: "Copyright © 2025 SmartGerman. Все права защищены.",
        footer_privacy: "Политика конфиденциальности",
        footer_imprint: "Импрессум",
        
        // Registration Modal
        modal_register_title: "Записаться на курс немецкого языка",
        modal_register_firstname: "Имя*",
        modal_register_lastname: "Фамилия*",
        modal_register_email: "Эл. почта*",
        modal_register_phone: "Телефон",
        modal_register_course: "Курс*",
        modal_register_course_select: "Пожалуйста, выберите",
        modal_register_level_title: "Уровень языка",
        modal_register_level1: "Без предварительных знаний",
        modal_register_level2: "Есть базовые знания",
        modal_register_level3: "Не уверен(а) (желателен тест на определение уровня)",
        modal_register_info: "Дополнительная информация или вопросы",
        modal_register_consent: "Я согласен(на) с тем, что мои данные будут сохранены и использованы для обработки моего запроса.*",
        modal_register_submit: "Отправить заявку",
        modal_register_required: "* Обязательные поля",
        modal_register_note: "После получения вашей заявки мы свяжемся с вами в течение 24 часов для дополнительной информации и согласования времени.",
        
        // Login Modal
        modal_login_title: "Войти",
        modal_login_email: "Адрес эл. почты*",
        modal_login_password: "Пароль*",
        modal_login_forgot: "Забыли пароль?",
        modal_login_submit: "Войти",
        modal_login_no_account: "Ещё нет аккаунта?",
        modal_login_register: "Зарегистрироваться",

        footer_agb: 'Условия использования',
        modal_register_agb_accept: 'Я прочитал(а) и принимаю',
        modal_register_agb_link: 'Условия использования',
        modal_register_agb_accept_end: '*',
        modal_register_agb_error: 'Пожалуйста, примите условия использования.',
        
        // Account Section
        account_title: "Мой аккаунт",
        account_welcome: "Добро пожаловать",
        account_not_logged_in: "Не вошли в систему",
        account_login_required: "Требуется вход",
        account_login_text: "Пожалуйста, войдите со своими учётными данными, чтобы просмотреть детали вашего аккаунта.",
        account_login_button: "Войти",
        account_register_button: "Регистрация",
        account_login_note: "После регистрации вы получите свои учётные данные по электронной почте.",
        
        account_tab_overview: "Обзор",
        account_tab_profile: "Редактировать профиль",
        account_tab_courses: "Мои курсы",
        account_tab_invoices: "Счета",
        account_tab_messages: "Сообщения",
        account_tab_settings: "Настройки",
        account_tab_community: "Сообщество",
        
        // Messages
        msg_success_register: "Спасибо за вашу регистрацию! Вы скоро получите письмо с вашими учётными данными.",
        msg_success_login: "Успешный вход!",
        msg_success_logout: "Вы успешно вышли из системы.",
        msg_error_login: "Ошибка входа",
        msg_error_fields: "Пожалуйста, заполните все обязательные поля.",
        msg_loading_courses: "Загрузка курсов...",

        // Kontakt
        contact_phone: "Телефон",
        contact_email: "Эл. почта",

        // Datenschutz
        privacy_title: "Политика конфиденциальности",
        privacy_updated: "Актуально на: Март 2025",
        privacy_responsible_title: "1. Ответственная сторона",
        privacy_responsible_text: "Ответственный за сбор, обработку и использование ваших персональных данных в смысле Общего регламента по защите данных (DSGVO):",
        privacy_company_name: "Языковая школа SmartGerman",
        privacy_data_title: "2. Сбор и обработка персональных данных",
        privacy_data_intro: "Персональные данные - это информация, которая может быть использована для установления вашей личности. Сюда относится информация, такая как ваше настоящее имя, адрес, почтовый адрес или номер телефона. Мы собираем, обрабатываем и используем персональные данные только тогда, когда они необходимы для предоставления наших услуг или вы добровольно предоставили их нам.",
        privacy_website_title: "2.1 Посещение нашего веб-сайта",
        privacy_website_text: "При посещении нашего веб-сайта мы собираем следующие данные, которые технически необходимы нам для отображения нашего сайта и обеспечения стабильности и безопасности:",
        privacy_website_list_item1: "IP-адрес",
        privacy_website_list_item2: "Дата и время запроса",
        privacy_website_list_item3: "Разница во времени с Гринвичем (GMT)",
        privacy_website_list_item4: "Содержание запроса (конкретная страница)",
        privacy_website_list_item5: "Статус доступа/HTTP-статус-код",
        privacy_website_list_item6: "Объем переданных данных",
        privacy_website_list_item7: "Веб-сайт, с которого пришел запрос",
        privacy_website_list_item8: "Браузер",
        privacy_website_list_item9: "Операционная система и ее интерфейс",
        privacy_website_list_item10: "Язык и версия программного обеспечения браузера",
        privacy_contact_title: "2.3 Регистрация на курсы",
        privacy_contact_text: "Когда вы регистрируетесь на один из наших курсов, мы собираем следующие данные:",
        privacy_registration_list_item1: "Имя и фамилия",
        privacy_registration_list_item2: "Контактные данные (эл. почта, телефон)",
        privacy_registration_list_item3: "Желаемый курс и формат курса",
        privacy_registration_list_item4: "Уровень языка",
        privacy_registration_list_item5: "Дополнительная информация, которую вы предоставляете добровольно",
        privacy_cookies_title: "3. Файлы cookie",
        privacy_cookies_intro: "Наш веб-сайт использует файлы cookie. Cookies - это небольшие текстовые файлы, которые хранятся на вашем устройстве и содержат определенные настройки и данные для обмена с нашей системой через ваш браузер.",
        privacy_rights_title: "4. Ваши права",
        privacy_rights_intro: "У вас есть следующие права в отношении ваших персональных данных:",
        privacy_rights_list_item1: "Право на информацию",
        privacy_rights_list_item2: "Право на исправление или удаление",
        privacy_rights_list_item3: "Право на ограничение обработки",
        privacy_rights_list_item4: "Право на возражение против обработки",
        privacy_rights_list_item5: "Право на переносимость данных",
        privacy_changes_title: "5. Изменения в политике конфиденциальности",
        privacy_changes_text: "Мы оставляем за собой право корректировать эту политику конфиденциальности, чтобы она всегда соответствовала текущим юридическим требованиям или для реализации изменений наших услуг в политике конфиденциальности.",
        back_to_home: "Вернуться на главную",

        modal_register_privacy_accept: 'Я согласен(на), что мои данные будут храниться и использоваться в соответствии с',
        modal_register_privacy_link: 'Политикой конфиденциальности',
        modal_register_privacy_accept_end: 'для обработки моего запроса.*',
        
        // Impressum
        imprint_title: "Импрессум",
        imprint_info_title: "Информация согласно § 5 TMG",
        imprint_represented_title: "Представлено",
        imprint_represented_note: "[Пожалуйста, замените это фактическим именем управляющего директора/владельца]",
        imprint_contact_title: "Контакт",
        imprint_vat_title: "НДС ID",
        imprint_vat_text: "Идентификационный номер плательщика НДС согласно § 27 a Закона об НДС:",
        imprint_vat_note: "[Пожалуйста, замените это своим фактическим номером НДС]",
        imprint_profession_title: "Профессиональное обозначение и профессиональные правила",
        imprint_profession_text: "Профессиональное обозначение: Языковая школа",
        imprint_authority: "Компетентный надзорный орган: [Пожалуйста, укажите компетентный для вас орган]",
        imprint_dispute_title: "Разрешение споров",
        imprint_dispute_text: "Европейская комиссия предоставляет платформу для онлайн-разрешения споров (OS):",
        imprint_dispute_note: "Мы не готовы и не обязаны участвовать в процедурах разрешения споров перед потребительским арбитражем.",
        imprint_liability_content_title: "Ответственность за контент",
        imprint_liability_links_title: "Ответственность за ссылки",
        imprint_copyright_title: "Авторское право",
        back_to_home: "Вернуться на главную",

        // CV
        about_cv_button: "Мой карьерный путь",
        cv_modal_title: "Карьерный путь Анастасии Ситов",
        cv_education_title: "Образование",
        cv_experience_title: "Опыт работы",
        cv_skills_title: "Дополнительные навыки",
        cv_skills_languages_title: "Языки",
        cv_skills_daz_title: "Немецкий как второй и иностранный язык",
        cv_modal_close: "Закрыть",
        cv_education_item2_date: "2010 – 2018",
        cv_education_item2_desc: "Гимназия Штольценау",
        cv_education_item3_date: "2018 – 2022",
        cv_education_item3_desc: "Университет Лейбница в Ганновере, междисциплинарный бакалавриат по биологии (основной) и немецкому языку (дополнительный) - Степень: Бакалавр наук",
        cv_education_item5_date: "С 10/2022",
        cv_education_item5_desc: "Магистратура для преподавателей в Университете Лейбница в Ганновере (Ожидаемая степень: Магистр образования)",
        cv_experience_item1_date: "09/2020 – 09/2022",
        cv_experience_item1_desc: "Репетитор в Lister Lernmeile",
        cv_experience_item4_date: "10/2022 – 07/2023",
        cv_experience_item4_desc: "Преподаватель языка в украинском приветственном классе в школе Эльзы-Брендстрём в Ганновере",
        cv_experience_item5_date: "С 09/2023",
        cv_experience_item5_desc: "Руководитель курсов немецкого языка в Украинском обществе в Нижней Саксонии",
        cv_experience_item6_date: "10/2023 – 07/2025",
        cv_experience_item6_desc: "Студенческая ассистентка в Университете Лейбница в Ганновере в области немецкого как иностранного и второго языка",
        cv_skills_languages_item1: "Немецкий (родной)",
        cv_skills_languages_item2: "Русский (родной)",
        cv_skills_languages_item3: "Английский (свободное владение устно и письменно)",
        cv_skills_languages_item4: "Французский (базовые знания)",
        cv_skills_languages_item5: "Турецкий (подготовка к сертификации A2; A1 завершен)",
        cv_skills_daz_item1: "Получение сертификата 'международные и межкультурные компетенции для преподавателей: многоязычие и образование' в Университете Лейбница в Ганновере."
    },

    ua: {
        // Navigation
        nav_home: "Головна",
        nav_courses: "Курси",
        nav_prices: "Ціни",
        nav_about: "Про мене",
        nav_method: "Методика",
        nav_location: "Місцезнаходження",
        nav_contact: "Контакти",
        nav_account: "Мій акаунт",
        nav_logout: "Вийти",
        nav_schedule: "Розклад",

        day_short_mo: "Пн",
        day_short_di: "Вт",
        day_short_mi: "Ср",
        day_short_do: "Чт",
        day_short_fr: "Пт",

        modal_register_address: "Адреса (Вулиця та №)*",
        modal_register_zip: "Індекс*",
        modal_register_city: "Місто*",
        msg_error_field_missing: 'Будь ласка, заповніть поле "%s".',
        msg_error_zip_invalid: 'Будь ласка, введіть дійсний 5-значний поштовий індекс.',
        msg_error_email_invalid: 'Будь ласка, введіть дійсну адресу електронної пошти.',
        
        // Hero Section
        hero_title: "Мова і культура - легко!",
        hero_subtitle: "Відкрийте для себе німецьку мову в сучасному та підтримуючому навчальному середовищі",
        hero_cta: "Записатися зараз",
        
        // Features Section
        features_title: "Що нас відрізняє",
        features_subtitle: "SmartGerman пропонує вам сучасний та ефективний спосіб вивчення німецької мови",
        feature1_title: "Носії мови",
        feature1_desc: "Наші кваліфіковані носії мови поєднують професійний досвід викладання з міжкультурною компетентністю для автентичного навчання.",
        feature2_title: "Гнучкий розклад",
        feature2_desc: "Ми пропонуємо курси в різний час доби, які адаптуються до вашого графіка - також ввечері та у вихідні.",
        feature3_title: "Практичні методи",
        feature3_desc: "Наші інтерактивні та комунікативні методи навчання фокусуються на повсякденних ситуаціях для швидкого та стійкого результату.",
        
        // Courses Section
        courses_title: "Наші курси",
        courses_subtitle: "Відкрийте для себе наші спеціально розроблені курси німецької мови - для літніх людей, дорослих та молодих учнів",
        
        course_50plus_a11_title: "Німецька 50+ A1.1",
        course_50plus_a11_desc: "Спеціально для учнів від 50 років. Повільний темп навчання, багато повторень та спокійна атмосфера для успішного початку вивчення німецької мови.",
        
        course_50plus_a12_title: "Німецька 50+ A1.2",
        course_50plus_a12_desc: "Продовжуючий курс для учнів з першими знаннями німецької. Поглибіть свої основи та розширте словниковий запас.",
        
        course_50plus_a22_title: "Німецька A2.2",
        course_50plus_a22_desc: "Просунутий курс для самостійного спілкування. Опануйте покупки, відвідування лікаря та спілкування з установами німецькою мовою.",
        
        course_50plus_intensiv_title: "Німецька Інтенсив A1.1",
        course_50plus_intensiv_desc: "Швидкий успіх завдяки інтенсивному навчанню в невеликій групі. Ідеально для мотивованих учнів, які хочуть швидко прогресувати.",
        
        course_speaking1_title: "Розмовна практика A1.1",
        course_speaking1_desc: "Цілеспрямоване тренування усного мовлення. Подолайте страх перед розмовою та здобудьте впевненість у повсякденному спілкуванні.",
        
        course_speaking2_title: "Розмовна практика A2",
        course_speaking2_desc: "Цілеспрямоване навчання розширеної усної комунікації. Практикуйтесь у невимушеній атмосфері та покращуйте вимову.",
        
        course_online_title: "Основи німецької мови A1.1",
        course_online_desc: "Гнучкий онлайн-курс з 3 заняттями на тиждень. Навчайтеся зручно з дому з особистим зворотнім зв'язком та групою в Telegram для питань.",

        course_gym_title: "Готовність до уроків німецької B1/B2",
        course_gym_desc: "Для підлітків від 14 років з німецькою як другою мовою. Цілеспрямоване тренування освітньої мови для уроків німецької на рівні B1/B2.",
        course_gym_content: "Підручник: Prima – Ankommen im Fachunterricht",
        course_gym_topics: "Зміст курсу: Розуміння операторів • Аналіз та інтерпретація текстів • Написання аргументацій • Тренування освітньої мови",
        course_50plus_a21_title: "Німецька 50+ A2.1",
        course_50plus_a21_desc: "Просунутий курс для самостійного спілкування. Покупки, візити до лікаря та спілкування з органами влади стають дитячою забавою.",

        course_speaking12_title: "Розмовна практика A1.2",
        course_speaking12_desc: "Поглиблене тренування мовлення для тих, хто має розширені знання рівня A1. Практикуйтеся у невимушеній атмосфері та покращуйте свою вимову.",

        course_children_title: "Німецька в природничих науках",
        course_children_desc: "Для дітей та підлітків 1-10 класів. Спеціалізована німецька для природничих предметів. Ідеально для підтримки шкільних занять.",
        course_children_desc_detailed: "У цьому курсі діти та підлітки, для яких німецька не є рідною мовою, отримують цілеспрямовану підтримку в розумінні природничих тем. Багато фахових термінів з біології, фізики та хімії є складними та значно відрізняються від повсякденної мови – навіть з добрими загальними знаннями німецької (напр., B1) фахові уроки часто залишаються важкими для розуміння.\n\nМи практикуємо структуру та значення ключових фахових термінів, читання та розуміння наукових текстів, опис експериментів та пояснення природничих зв'язків німецькою мовою.\n\nЗаняття проходять у невеликій групі (макс. 8 учасників), що дозволяє індивідуально підходити до мовних та фахових труднощів.\nКурс веде викладач, який вивчав німецьку мову та біологію та має досвід викладання німецької як другої мови (DaZ).", // <- НОВЕ: Довгий опис
        course_50plus_desc_detailed: "Ця серія курсів призначена для людей віком від 50 років, які хочуть вивчати німецьку мову у власному темпі, за допомогою відповідних методів та у сприятливій навчальній атмосфері.\nСтарших учнів часто не беруть до уваги у класичному мовному навчанні – майже немає інтеграційних курсів або матеріалів, які б дійсно враховували їхню життєву реальність, досвід навчання та потреби. Саме тут і починається ця пропозиція курсів.\n\nЯ присвячую свою магістерську роботу в Ганноверському університеті імені Лейбніца темі оптимізації викладання німецької мови для старших учнів. При цьому я поєдную актуальні наукові знання про вивчення мов у похилому віці зі своїм практичним досвідом викладання.\nЦентральним компонентом моєї роботи та мого викладання є свідоме включення рідної мови для сприяння розумінню, мотивації та довгостроковому успіху в навчанні.\n\nШироко поширене упередження, що літні люди більше не можуть вивчити нову мову, є науково необґрунтованим. За допомогою правильних методів, терпіння та цілеспрямованої підтримки люди старше 50 років також можуть успішно опанувати нову мову.",

        // Course Details
        course_detail_time: "на тиждень",
        course_detail_max: "Макс.",
        course_detail_participants: "учасників",
        course_detail_price: "Ціна:",
        course_detail_per_month: "на місяць",
        course_detail_per_unit: "за заняття",
        course_detail_online: "Онлайн через Zoom",
        course_badge_popular: "Популярний",
        course_badge_intensive: "Інтенсив",
        course_badge_online: "Онлайн",
        course_badge_presence: "Очно",
        course_cta: "Записатися",
        schedule_time_uhr: "год",
        modal_register_course_select: 'Будь ласка, оберіть курс',
        
        // Schedule Section
        schedule_title: "📅 Тижневий розклад",
        schedule_subtitle: "Фільтруйте за типом курсу або переглядайте всі курси одразу",
        schedule_filter_all: "Всі курси",
        schedule_filter_senior: "Німецька 50+",
        schedule_filter_speaking: "Розмовна практика",
        schedule_filter_youth: "Курси для молоді",
        schedule_filter_online: "Онлайн",
        
        schedule_stat_courses: "Курсів видимо",
        schedule_stat_hours: "Навчальних годин/тиждень",
        schedule_stat_participants: "Учасників на курс",
        
        schedule_day_monday: "Понеділок",
        schedule_day_tuesday: "Вівторок",
        schedule_day_wednesday: "Середа",
        schedule_day_thursday: "Четвер",
        schedule_day_friday: "П'ятниця",
        schedule_time_label: "Час",

        footer_agb: 'Умови використання',
        modal_register_agb_accept: 'Я прочитав(ла) і приймаю',
        modal_register_agb_link: 'Умови використання',
        modal_register_agb_accept_end: '*',
        modal_register_agb_error: 'Будь ласка, прийміть умови використання.',
        
        schedule_info_senior_title: "Курси Німецька",
        schedule_info_senior_levels: "4 різних рівні",
        schedule_info_senior_detail1: "A1.1 & A1.2 для початківців",
        schedule_info_senior_detail2: "A2.2 для продовжуючих",
        schedule_info_senior_detail3: "Інтенсивний курс доступний",
        schedule_info_senior_detail4: "Макс. 10-16 учасників",
        
        schedule_info_speaking_title: "Розмовна практика",
        schedule_info_speaking_slots: "2 часових слоти доступні",
        schedule_info_speaking_detail1: "Вівторок 10:15-11:15",
        schedule_info_speaking_detail2: "Вівторок 11:30-12:30",
        schedule_info_speaking_detail3: "Фокус: Розмова",
        schedule_info_speaking_detail4: "Макс. 12 учасників",
        
        schedule_info_youth_title: "Готовність до уроків німецької",
        schedule_info_youth_online: "Онлайн-курс для підлітків B1/B2",
        schedule_info_youth_detail1: "Від 14 років (DaZ)",
        schedule_info_youth_detail2: "Четвер 15:00-16:00",
        schedule_info_youth_detail3: "Тренування освітньої мови",
        schedule_info_youth_detail4: "Макс. 8 учасників",
        
        schedule_info_online_title: "Основи німецької мови A1.1",
        schedule_info_online_flexible: "Гнучкий розклад",
        schedule_info_online_detail1: "3x 60 хв на тиждень",
        schedule_info_online_detail2: "Час за домовленістю",
        schedule_info_online_detail3: "Група Telegram вкл.",
        schedule_info_online_detail4: "Макс. 6 учасників",
        
        schedule_cta_title: "Знайшли свій відповідний курс?",
        schedule_cta_subtitle: "Запишіться зараз або зв'яжіться з нами для особистої консультації",
        schedule_cta_register: "Записатися",
        schedule_cta_consult: "Запросити консультацію",
        
        schedule_50plus_a21: "Німецька A2.1",
        schedule_speaking_a11: "Розмовна практика A1.1",
        schedule_speaking_a12: "Розмовна практика A1.2",
        schedule_speaking_a2: "Розмовна практика A2",
        schedule_children: "Німецька в природничих науках",
        schedule_online_basics: "Основи німецької мови A1.1",
        schedule_youth: "Готовність до уроків німецької B1/B2",

        schedule_course_location: "Königstraße 20",
        
        // Pricing Section
        pricing_title: "Наші ціни",
        pricing_subtitle: "Прозорі та справедливі ціни на вашу мовну освіту",
        
        pricing_senior_title: "Люди",
        pricing_senior_period: "/ місяць",
        pricing_senior_note: "4x 45 хв на тиждень",
        pricing_senior_feature1: "Стандартні курси A1.1, A1.2, A2.2",
        pricing_senior_feature2: "Спеціально для учнів від 50",
        pricing_senior_feature3: "Повільний темп навчання",
        pricing_senior_feature4: "Макс. 16 учасників",
        pricing_senior_feature5: "2,50€ за 45 хвилин",
        
        pricing_special_title: "Інтенсив і Спеціальні",
        pricing_special_period: "/ місяць",
        pricing_special_note: "В залежності від формату курсу",
        pricing_special_feature1: "Інтенсив 50+: 60€/місяць (3x60хв)",
        pricing_special_feature2: "Розмовна практика: 20€/місяць (1x60хв)",
        pricing_special_feature3: "Невеликі групи (10-12 уч.)",
        pricing_special_feature4: "Індивідуальне навчання",
        pricing_special_feature5: "Цілеспрямоване тренування",
        
        pricing_youth_title: "Молодь і Онлайн",
        pricing_youth_period: "/ місяць",
        pricing_youth_note: "1x 60 хв на тиждень",
        pricing_youth_feature1: "Готовність до гімназії: 48€/місяць",
        pricing_youth_feature2: "Онлайн-інтенсив: 10€ за заняття",
        pricing_youth_feature3: "Макс. 6-8 учасників",
        pricing_youth_feature4: "Онлайн через Zoom",
        pricing_youth_feature5: "Особистий зворотній зв'язок",
        
        pricing_cta: "Вибрати",

        // Прозоре ціноутворення
        pricing_transparency_title: "Прозоре ціноутворення",
        pricing_transparency_intro: "Наші курси оплачуються щомісяця. Ціна залежить від кількості фактично проведених занять у відповідному місяці.",
        pricing_examples_title: "Приклади цін",
        pricing_example_4: "Місяць з 4 заняттями: 48€",
        pricing_example_5: "Місяць з 5 заняттями: 60€",
    
        pricing_example_typical: "Типовий місяць",
        pricing_example_typical_desc: "Кількість занять варіюється залежно від місяця (напр., через свята або тривалість місяця).", // <-- Змінено
        pricing_example_specific_title: "Конкретний приклад", // <-- Новий ключ
        pricing_example_course_info: "Курс: Німецька 50+ A1.1 (2,50€ / 45 хв. заняття)", // <-- Новий ключ
        pricing_example_course_calc: "Місяць з 8 заняттями (16 одиниць): 40€\nМісяць з 9 заняттями (18 одиниць): 45€", // <-- Новий ключ
        pricing_fairness_title: "Чесно і прозоро",
        pricing_fairness_desc: "Ви платите лише за фактично проведені заняття. Святкові дні та канікули враховуються.",
                
        // About Section
        owner_name: "Анастасія Сітов",
        about_title: "Про мене",
        about_p1: "Мене звати Анастасія Сітов, і моя пристрасть - викладання німецької мови як другої. Я виросла двомовною з російською та німецькою мовами та вже під час навчання зрозуміла, наскільки важливо викладати мову зрозуміло та практично.",
        about_p2: "Мені часто розповідали, що мовні курси в Німеччині для багатьох учнів надто швидкі, а пояснення занадто складні. Тому я поставила перед собою завдання викладати німецьку так, щоб мої учні могли вчитися у власному темпі - без тиску відразу обробляти великі обсяги інформації. При цьому я використовую зрозумілі пояснення рідною мовою учнів, щоб полегшити їм входження в німецьку мову.",
        
        // Method Section
        method_title: "Наша методика",
        method_subtitle: "У SmartGerman ми використовуємо практико-орієнтований підхід, який допоможе вам швидко та ефективно вивчити німецьку мову",
        method1_title: "Комунікативно",
        method1_desc: "Наш фокус на практичному спілкуванні та повсякденних ситуаціях. Ви вивчаєте саме те, що дійсно потрібно для життя в Німеччині.",
        method2_title: "Інтерактивно",
        method2_desc: "Завдяки живим вправам та рольовим іграм ви покращуєте свої мовні навички та навички сприйняття на слух у динамічному навчальному середовищі.",
        method3_title: "Культурно",
        method3_desc: "Ми передаємо не лише мову, але й цінні знання про німецьку культуру та пропонуємо практичну допомогу в орієнтації у повсякденному житті.",
        
        // Location Section
        location_title: "Наше місцезнаходження",
        location_subtitle: "Відвідайте нас в Українському товаристві в Нижній Саксонії e.V. в Ганновері",
        location_address_title: "Адреса",
        location_address_company: "Мовна школа SmartGerman",
        location_address_at: "при Українському товаристві в Нижній Саксонії e.V.",
        location_address_street: "Königstraße 20",
        location_address_city: "30175 Hannover",
        location_hours_title: "Години роботи:",
        location_hours_weekday: "Понеділок - П'ятниця: 9:00 - 17:30",
        location_hours_saturday: "Субота: За домовленістю",
        location_hours_sunday: "Неділя: Зачинено",
        
        location_transit_title: "Як дістатися",
        location_transit_public: "Громадським транспортом:",
        location_transit_line1: "Трамвай лінії 1, 2, 8 - зупинка \"Schlägerstraße\"",
        location_transit_line2: "Трамвай лінії 10 - зупинка \"Königstraße\"",
        location_transit_car: "На машині:",
        location_transit_parking1: "Парковка в околиці є.",
        location_transit_parking2: "Можливості паркування на сусідніх вулицях",
        
        // CTA Section
        cta_title: "Готові покращити свої знання німецької?",
        cta_subtitle: "Запишіться вже сьогодні та почніть свою мовну подорож зі SmartGerman",
        cta_button: "Записатися зараз",
        
        // Footer
        footer_about: "SmartGerman пропонує індивідуальні курси німецької мови для новоприбулих до Німеччини. Ми робимо мову та культуру легкодоступними та сприяємо інтеграції.",
        footer_quicklinks: "Швидкі посилання",
        footer_contact: "Контакти",
        footer_hours: "Години роботи",
        footer_hours_weekday: "Пн-Пт: 9:00 - 20:00",
        footer_hours_saturday: "Сб: 10:00 - 15:00",
        footer_hours_sunday: "Нд: Зачинено",
        footer_copyright: "Copyright © 2025 SmartGerman. Усі права захищені.",
        footer_privacy: "Політика конфіденційності",
        footer_imprint: "Імпресум",
        
        // Registration Modal
        modal_register_title: "Записатися на курс німецької мови",
        modal_register_firstname: "Ім'я*",
        modal_register_lastname: "Прізвище*",
        modal_register_email: "Ел. пошта*",
        modal_register_phone: "Телефон",
        modal_register_course: "Курс*",
        modal_register_course_select: "Будь ласка, виберіть",
        modal_register_level_title: "Рівень мови",
        modal_register_level1: "Без попередніх знань",
        modal_register_level2: "Є базові знання",
        modal_register_level3: "Не впевнений(а) (бажаний тест на визначення рівня)",
        modal_register_info: "Додаткова інформація або питання",
        modal_register_consent: "Я погоджуюсь, що мої дані будуть збережені та використані для обробки моєї заявки.*",
        modal_register_submit: "Відправити заявку",
        modal_register_required: "* Обов'язкові поля",
        modal_register_note: "Після отримання вашої заявки ми зв'яжемося з вами протягом 24 годин для додаткової інформації та узгодження часу.",
        
        // Login Modal
        modal_login_title: "Увійти",
        modal_login_email: "Адреса ел. пошти*",
        modal_login_password: "Пароль*",
        modal_login_forgot: "Забули пароль?",
        modal_login_submit: "Увійти",
        modal_login_no_account: "Ще немає акаунта?",
        modal_login_register: "Зареєструватися",
        
        // Account Section
        account_title: "Мій акаунт",
        account_welcome: "Ласкаво просимо",
        account_not_logged_in: "Не увійшли в систему",
        account_login_required: "Потрібен вхід",
        account_login_text: "Будь ласка, увійдіть зі своїми обліковими даними, щоб переглянути деталі вашого акаунта.",
        account_login_button: "Увійти",
        account_register_button: "Реєстрація",
        account_login_note: "Після реєстрації ви отримаєте свої облікові дані електронною поштою.",
        
        account_tab_overview: "Огляд",
        account_tab_profile: "Редагувати профіль",
        account_tab_courses: "Мої курси",
        account_tab_invoices: "Рахунки",
        account_tab_messages: "Повідомлення",
        account_tab_settings: "Налаштування",
        account_tab_community: "Спільнота",
        
        // Messages
        msg_success_register: "Дякуємо за вашу реєстрацію! Ви скоро отримаєте лист з вашими обліковими даними.",
        msg_success_login: "Успішний вхід!",
        msg_success_logout: "Ви успішно вийшли з системи.",
        msg_error_login: "Помилка входу",
        msg_error_fields: "Будь ласка, заповніть всі обов'язкові поля.",
        msg_loading_courses: "Завантаження курсів...",

        // Kontakt
        contact_phone: "Телефон",
        contact_email: "Ел. пошта",

        // Datenschutz
        privacy_title: "Політика конфіденційності",
        privacy_updated: "Актуально на: Березень 2025",
        privacy_responsible_title: "1. Відповідальна сторона",
        privacy_responsible_text: "Відповідальний за збір, обробку та використання ваших персональних даних у розумінні Загального регламенту захисту даних (DSGVO):",
        privacy_company_name: "Мовна школа SmartGerman",
        privacy_data_title: "2. Збір та обробка персональних даних",
        privacy_data_intro: "Персональні дані - це інформація, яка може бути використана для встановлення вашої особи. Сюди відноситься інформація, така як ваше справжнє ім'я, адреса, поштова адреса або номер телефону. Ми збираємо, обробляємо та використовуємо персональні дані лише тоді, коли вони необхідні для надання наших послуг або ви добровільно надали їх нам.",
        privacy_website_title: "2.1 Відвідування нашого веб-сайту",
        privacy_website_text: "При відвідуванні нашого веб-сайту ми збираємо наступні дані, які технічно необхідні нам для відображення нашого сайту та забезпечення стабільності та безпеки:",
        privacy_website_list_item1: "IP-адреса",
        privacy_website_list_item2: "Дата та час запиту",
        privacy_website_list_item3: "Різниця в часі з Гринвічем (GMT)",
        privacy_website_list_item4: "Зміст запиту (конкретна сторінка)",
        privacy_website_list_item5: "Статус доступу/HTTP-статус-код",
        privacy_website_list_item6: "Обсяг переданих даних",
        privacy_website_list_item7: "Веб-сайт, з якого надійшов запит",
        privacy_website_list_item8: "Браузер",
        privacy_website_list_item9: "Операційна система та її інтерфейс",
        privacy_website_list_item10: "Мова та версія програмного забезпечення браузера",
        privacy_contact_title: "2.3 Реєстрація на курси",
        privacy_contact_text: "Коли ви реєструєтесь на один з наших курсів, ми збираємо наступні дані:",
        privacy_registration_list_item1: "Ім'я та прізвище",
        privacy_registration_list_item2: "Контактні дані (ел. пошта, телефон)",
        privacy_registration_list_item3: "Бажаний курс та формат курсу",
        privacy_registration_list_item4: "Рівень мови",
        privacy_registration_list_item5: "Додаткова інформація, яку ви надаєте добровільно",
        privacy_cookies_title: "3. Файли cookie",
        privacy_cookies_intro: "Наш веб-сайт використовує файли cookie. Cookies - це невеликі текстові файли, які зберігаються на вашому пристрої та містять певні налаштування та дані для обміну з нашою системою через ваш браузер.",
        privacy_rights_title: "4. Ваші права",
        privacy_rights_intro: "У вас є наступні права щодо ваших персональних даних:",
        privacy_rights_list_item1: "Право на інформацію",
        privacy_rights_list_item2: "Право на виправлення або видалення",
        privacy_rights_list_item3: "Право на обмеження обробки",
        privacy_rights_list_item4: "Право на заперечення проти обробки",
        privacy_rights_list_item5: "Право на перенесення даних",
        privacy_changes_title: "5. Зміни в політиці конфіденційності",
        privacy_changes_text: "Ми залишаємо за собою право коригувати цю політику конфіденційності, щоб вона завжди відповідала поточним юридичним вимогам або для реалізації змін наших послуг у політиці конфіденційності.",
        back_to_home: "Повернутися на головну",
        
        // Impressum
        imprint_title: "Імпресум",
        imprint_info_title: "Інформація відповідно до § 5 TMG",
        imprint_represented_title: "Представлено",
        imprint_represented_note: "[Будь ласка, замініть це фактичним ім'ям керуючого директора/власника]",
        imprint_contact_title: "Контакт",
        imprint_vat_title: "ПДВ ID",
        imprint_vat_text: "Ідентифікаційний номер платника ПДВ відповідно до § 27 a Закону про ПДВ:",
        imprint_vat_note: "[Будь ласка, замініть це своїм фактичним номером ПДВ]",
        imprint_profession_title: "Професійне позначення та професійні правила",
        imprint_profession_text: "Професійне позначення: Мовна школа",
        imprint_authority: "Компетентний наглядовий орган: [Будь ласка, вкажіть компетентний для вас орган]",
        imprint_dispute_title: "Вирішення спорів",
        imprint_dispute_text: "Європейська комісія надає платформу для онлайн-вирішення спорів (OS):",
        imprint_dispute_note: "Ми не готові та не зобов'язані брати участь у процедурах вирішення спорів перед споживчим арбітражем.",
        imprint_liability_content_title: "Відповідальність за контент",
        imprint_liability_links_title: "Відповідальність за посилання",
        imprint_copyright_title: "Авторське право",
        back_to_home: "Повернутися на головну",

        modal_register_privacy_accept: 'Я погоджуюсь, що мої дані будуть зберігатися та використовуватися відповідно до',
        modal_register_privacy_link: 'Політики конфіденційності',
        modal_register_privacy_accept_end: 'для обробки мого запиту.*', 

        // CV
        about_cv_button: "Мій кар'єрний шлях",
        cv_modal_title: "Кар'єрний шлях Анастасії Сітов",
        cv_education_title: "Освіта",
        cv_experience_title: "Досвід роботи",
        cv_skills_title: "Додаткові навички",
        cv_skills_languages_title: "Мови",
        cv_skills_daz_title: "Німецька як друга та іноземна мова",
        cv_modal_close: "Закрити",
        cv_education_item2_date: "2010 – 2018",
        cv_education_item2_desc: "Гімназія Штольценау",
        cv_education_item3_date: "2018 – 2022",
        cv_education_item3_desc: "Університет Лейбніца в Ганновері, міждисциплінарний бакалаврат з біології (основний) та німецької мови (додатковий) - Ступінь: Бакалавр наук",
        cv_education_item5_date: "З 10/2022",
        cv_education_item5_desc: "Магістратура для викладачів в Університеті Лейбніца в Ганновері (Очікуваний ступінь: Магістр освіти)",
        cv_experience_item1_date: "09/2020 – 09/2022",
        cv_experience_item1_desc: "Репетитор у Lister Lernmeile",
        cv_experience_item4_date: "10/2022 – 07/2023",
        cv_experience_item4_desc: "Викладач мови в українському вітальному класі в школі Ельзи-Брендстрем у Ганновері",
        cv_experience_item5_date: "З 09/2023",
        cv_experience_item5_desc: "Керівник курсів німецької мови в Українському товаристві в Нижній Саксонії",
        cv_experience_item6_date: "10/2023 – 07/2025",
        cv_experience_item6_desc: "Студентська асистентка в Університеті Лейбніца в Ганновері в галузі німецької як іноземної та другої мови",
        cv_skills_languages_item1: "Німецька (рідна)",
        cv_skills_languages_item2: "Російська (рідна)",
        cv_skills_languages_item3: "Англійська (вільне володіння усно та письмово)",
        cv_skills_languages_item4: "Французька (базові знання)",
        cv_skills_languages_item5: "Турецька (підготовка до сертифікації A2; A1 завершено)",
        cv_skills_daz_item1: "Отримання сертифіката 'міжнародні та міжкультурні компетенції для викладачів: багатомовність та освіта' в Університеті Лейбніца в Ганновері."
    
    },

    // Englische Übersetzungen
    en: {
        // Navigation
        nav_home: "Home",
        nav_courses: "Courses",
        nav_prices: "Prices",
        nav_about: "About Me",
        nav_method: "Method",
        nav_location: "Location",
        nav_contact: "Contact",
        nav_account: "My Account",
        nav_logout: "Logout",
        nav_schedule: "Schedule",

        day_short_mo: "Mon",
        day_short_di: "Tue",
        day_short_mi: "Wed",
        day_short_do: "Thu",
        day_short_fr: "Fri",

        msg_error_field_missing: 'Please fill in the field "%s".',
        msg_error_zip_invalid: 'Please enter a valid 5-digit ZIP code.',
        msg_error_email_invalid: 'Please enter a valid email address.',
        modal_register_address: "Address (Street & No.)*",
        modal_register_zip: "ZIP Code*",
        modal_register_city: "City*",
        
        // Hero Section
        hero_title: "Language & Culture Made Easy",
        hero_subtitle: "Discover the German language in a modern, supportive learning environment",
        hero_cta: "Register Now",
        
        // Features Section
        features_title: "What Sets Us Apart",
        features_subtitle: "SmartGerman offers you a modern and effective way to learn German",
        feature1_title: "Native Speakers",
        feature1_desc: "Our qualified native speakers combine professional teaching experience with intercultural competence for an authentic learning experience.",
        feature2_title: "Flexible Schedule",
        feature2_desc: "We offer courses at various times of day that adapt to your schedule - also evenings and weekends.",
        feature3_title: "Practical Methods",
        feature3_desc: "Our interactive and communicative teaching methods focus on everyday situations for fast and lasting success.",
        
        // Courses Section
        courses_title: "Our Courses",
        courses_subtitle: "Discover our specially designed German courses - for seniors, adults, and young learners",
        
        course_50plus_a11_title: "German 50+ A1.1",
        course_50plus_a11_desc: "Specially for learners aged 50 and over. Slow learning pace, lots of repetition and a relaxed atmosphere for a successful start in learning German.",
        
        course_50plus_a12_title: "German 50+ A1.2",
        course_50plus_a12_desc: "Continuation course for learners with first German knowledge. Deepen your basics and expand your vocabulary.",
        
        course_50plus_a22_title: "German A2.2",
        course_50plus_a22_desc: "Advanced course for independent communication. Master shopping, doctor visits and dealing with authorities in German.",
        
        course_50plus_intensiv_title: "German Intensive A1.1",
        course_50plus_intensiv_desc: "Fast success through intensive support in a small group. Ideal for motivated learners who want to progress quickly.",
        
        course_speaking1_title: "Speaking Practice A1.1",
        course_speaking1_desc: "Targeted training in oral communication. Overcome the fear of speaking and gain confidence in everyday life.",
        
        course_speaking2_title: "Speaking Practice A2",
        course_speaking2_desc: "Targeted training in advanced oral communication. Practice in a relaxed atmosphere and improve your pronunciation.",
        
        course_online_title: "German Language Basics A1.1",
        course_online_desc: "Flexible online course with 3 sessions per week. Learn conveniently from home with personal feedback and Telegram group for questions.",

        course_gym_title: "Ready for German Class B1/B2",
        course_gym_desc: "For teenagers aged 14 and over with German as a second language. Targeted training of academic language for German lessons at B1/B2 level.",
        course_gym_content: "Textbook: Prima – Ankommen im Fachunterricht",
        course_gym_topics: "Course content: Understanding operators • Analyzing & interpreting texts • Writing argumentations • Training academic language",
        course_50plus_a21_title: "German 50+ A2.1",
        course_50plus_a21_desc: "Advanced course for independent communication. Shopping, doctor visits, and dealing with authorities become child's play.",

        course_speaking12_title: "Speaking Training A1.2",
        course_speaking12_desc: "Advanced speaking training for learners with extended A1 knowledge. Practice in a relaxed atmosphere and improve your pronunciation.",

        course_children_title: "German in Natural Sciences",
        course_children_desc: "For children and teenagers in grades 1-10. Technical German for science subjects. Perfect to support school lessons.",
        course_children_desc_detailed: "In this course, children and teenagers whose first language is not German receive targeted support in understanding scientific topics. Many technical terms in biology, physics, and chemistry are complex and differ significantly from everyday language – even with good general German skills (e.g., B1), science classes often remain difficult to understand.\n\nWe practice the structure and meaning of key technical terms, reading and understanding non-fiction texts, describing experiments, and explaining scientific concepts in German.\n\nThe class takes place in a small group (max. 8 participants), allowing for individual attention to linguistic and subject-specific difficulties.\nThe course is led by a teacher who has studied German and Biology and has experience in teaching German as a second language (DaZ).", // <- NEW: Long description
        course_50plus_desc_detailed: "This course series is aimed at people aged 50 and over who want to learn German at their own pace, with suitable methods, and in a supportive learning atmosphere.\nOlder learners are often overlooked in traditional language teaching – there are hardly any integration courses or materials that truly consider their life reality, learning experiences, and needs. This is exactly where this course offering comes in.\n\nI am dedicating my master's thesis at Leibniz University Hannover to the topic of how German lessons for older learners can be optimized. I combine current scientific findings on language learning in old age with my practical teaching experience.\nA central component of my work and my teaching is the conscious inclusion of the native language to promote understanding, motivation, and long-term learning success.\n\nThe widespread prejudice that older people can no longer learn a new language is scientifically unfounded. With the right methods, patience, and targeted support, people over 50 can also successfully acquire a new language.",

        // Course Details
        course_detail_time: "per week",
        course_detail_max: "Max.",
        course_detail_participants: "participants",
        course_detail_price: "Price:",
        course_detail_per_month: "per month",
        course_detail_per_unit: "per session",
        course_detail_online: "Online via Zoom",
        course_badge_popular: "Popular",
        course_badge_intensive: "Intensive",
        course_badge_online: "Online",
        course_badge_presence: "In-Person",
        course_cta: "Register",
        modal_register_course_select: 'Please select a course',
        
        // Schedule Section
        schedule_title: "📅 Weekly Schedule",
        schedule_subtitle: "Filter by course type or view all courses at once",
        schedule_filter_all: "All Courses",
        schedule_filter_senior: "German",
        schedule_filter_speaking: "Speaking Practice",
        schedule_filter_youth: "Courses for Youth",
        schedule_filter_online: "Online",
        
        schedule_stat_courses: "Courses visible",
        schedule_stat_hours: "Teaching hours/week",
        schedule_stat_participants: "Participants per course",
        
        schedule_day_monday: "Monday",
        schedule_day_tuesday: "Tuesday",
        schedule_day_wednesday: "Wednesday",
        schedule_day_thursday: "Thursday",
        schedule_day_friday: "Friday",
        schedule_time_label: "Time",

        footer_agb: 'Terms & Conditions',
        modal_register_agb_accept: 'I have read and accept the',
        modal_register_agb_link: 'Terms & Conditions',
        modal_register_agb_accept_end: '*',
        modal_register_agb_error: 'Please accept the Terms & Conditions.',
        
        schedule_info_senior_title: "German Courses",
        schedule_info_senior_levels: "4 different levels",
        schedule_info_senior_detail1: "A1.1 & A1.2 for beginners",
        schedule_info_senior_detail2: "A2.2 for intermediate",
        schedule_info_senior_detail3: "Intensive course available",
        schedule_info_senior_detail4: "Max. 10-16 participants",
        
        schedule_info_speaking_title: "Speaking Practice",
        schedule_info_speaking_slots: "2 time slots available",
        schedule_info_speaking_detail1: "Tuesdays 10:15-11:15",
        schedule_info_speaking_detail2: "Tuesdays 11:30-12:30",
        schedule_info_speaking_detail3: "Focus: Conversation",
        schedule_info_speaking_detail4: "Max. 12 participants",
        
        schedule_info_youth_title: "Ready for German Class",
        schedule_info_youth_online: "Online course for teenagers B1/B2",
        schedule_info_youth_detail1: "From 14 years old (DaZ)",
        schedule_info_youth_detail2: "Thursdays 15:00-16:00",
        schedule_info_youth_detail3: "Academic language training",
        schedule_info_youth_detail4: "Max. 8 participants",
        
        schedule_info_online_title: "German Language Basics A1.1",
        schedule_info_online_flexible: "Flexible schedule",
        schedule_info_online_detail1: "3x 60 min per week",
        schedule_info_online_detail2: "Times by arrangement",
        schedule_info_online_detail3: "Telegram group incl.",
        schedule_info_online_detail4: "Max. 6 participants",
        
        schedule_cta_title: "Found Your Perfect Course?",
        schedule_cta_subtitle: "Register now or contact us for personal consultation",
        schedule_cta_register: "Register Now",
        schedule_cta_consult: "Request Consultation",
        
        schedule_50plus_a21: "German A2.1",
        schedule_speaking_a11: "Speaking Practice A1.1",
        schedule_speaking_a12: "Speaking Practice A1.2",
        schedule_speaking_a2: "Speaking Practice A2",
        schedule_children: "German in Natural Sciences",
        schedule_online_basics: "German Language Basics A1.1",
        schedule_youth: "Ready for German Class B1/B2",

        schedule_course_location: "Königstraße 20",
        schedule_time_uhr: "o'clock",
        
        // Pricing Section
        pricing_title: "Our Prices",
        pricing_subtitle: "Transparent and fair prices for your language education",
        
        pricing_senior_title: "Seniors",
        pricing_senior_period: "/ month",
        pricing_senior_note: "4x 45 min per week",
        pricing_senior_feature1: "Standard courses A1.1, A1.2, A2.2",
        pricing_senior_feature2: "Specially for learners 50+",
        pricing_senior_feature3: "Slow learning pace",
        pricing_senior_feature4: "Max. 16 participants",
        pricing_senior_feature5: "€2.50 per 45 minutes",
        
        pricing_special_title: "Intensive & Special",
        pricing_special_period: "/ month",
        pricing_special_note: "Depending on course format",
        pricing_special_feature1: "Intensive 50+: €60/month (3x60min)",
        pricing_special_feature2: "Speaking practice: €20/month (1x60min)",
        pricing_special_feature3: "Small groups (10-12 part.)",
        pricing_special_feature4: "Individual support",
        pricing_special_feature5: "Targeted training",
        
        pricing_youth_title: "Youth & Online",
        pricing_youth_period: "/ month",
        pricing_youth_note: "1x 60 min per week",
        pricing_youth_feature1: "Ready for High School: €48/month",
        pricing_youth_feature2: "Online Intensive: €10 per session",
        pricing_youth_feature3: "Max. 6-8 participants",
        pricing_youth_feature4: "Online via Zoom",
        pricing_youth_feature5: "Personal feedback",

        pricing_example_typical: "Typical Month",
        pricing_example_typical_desc: "The number of course sessions varies depending on the month (e.g., due to holidays or month length).", // <-- Changed
        pricing_example_specific_title: "Specific Example", // <-- New Key
        pricing_example_course_info: "Course: German 50+ A1.1 (€2.50 / 45 min unit)", // <-- New Key
        pricing_example_course_calc: "Month with 8 sessions (16 units): €40\nMonth with 9 sessions (18 units): €45", // <-- New Key
        pricing_fairness_title: "Fair & Transparent",
        pricing_fairness_desc: "You only pay for sessions that actually take place. Public holidays and vacations are taken into account.",
        
        pricing_cta: "Select",

        // Transparent Pricing
        pricing_transparency_title: "Transparent Pricing",
        pricing_transparency_intro: "Our courses are billed monthly. The price is based on the number of sessions actually taking place in the respective month.",
        pricing_examples_title: "Pricing Examples",
        pricing_example_4: "Month with 4 sessions: €48",
        pricing_example_5: "Month with 5 sessions: €60",
    
        // About Section
        owner_name: "Anastasia Sitov",
        about_title: "About Me",
        about_p1: "My name is Anastasia Sitov, and my passion is teaching German as a second language. I grew up bilingual with Russian and German and realized during my studies how important it is to teach language in an understandable and practical way.",
        about_p2: "I have often been told that language courses in Germany are too fast for many learners and the explanations too complex. That's why I have made it my mission to teach German in a way that allows my students to learn at their own pace - without the pressure to immediately process large amounts of information. I use clear explanations in the learners' native language to make it easier for them to enter the German language.",
        
        // Method Section
        method_title: "Our Method",
        method_subtitle: "At SmartGerman we use a practice-oriented approach that helps you learn German quickly and effectively",
        method1_title: "Communicative",
        method1_desc: "Our focus is on practical communication and everyday situations. You learn exactly what you really need for your life in Germany.",
        method2_title: "Interactive",
        method2_desc: "Through lively exercises and role plays, you improve your speaking and listening skills in a dynamic learning environment.",
        method3_title: "Cultural",
        method3_desc: "We don't just teach language, but also provide valuable insights into German culture and offer practical orientation help for everyday life.",
        
        // Location Section
        location_title: "Our Location",
        location_subtitle: "Visit us at the Ukrainian Association in Lower Saxony e.V. in Hannover",
        location_address_title: "Address",
        location_address_company: "SmartGerman Language School",
        location_address_at: "at the Ukrainian Association in Lower Saxony e.V.",
        location_address_street: "Königstraße 20",
        location_address_city: "30175 Hannover",
        location_hours_title: "Opening Hours:",
        location_hours_weekday: "Monday - Friday: 9:00 AM - 5:30 PM",
        location_hours_saturday: "Saturday: By appointment",
        location_hours_sunday: "Sunday: Closed",
        
        location_transit_title: "Directions",
        location_transit_public: "By public transport:",
        location_transit_line1: "Tram lines 1, 2, 8 - stop \"Schlägerstraße\"",
        location_transit_line2: "Tram line 10 - stop \"Königstraße\"",
        location_transit_car: "By car:",
        location_transit_parking1: "Parking available in the area.",
        location_transit_parking2: "Parking options on nearby streets",
        
        // CTA Section
        cta_title: "Ready to Improve Your German Skills?",
        cta_subtitle: "Register today and start your language journey with SmartGerman",
        cta_button: "Register Now",
        
        // Footer
        footer_about: "SmartGerman offers tailored German courses for newcomers to Germany. We make language and culture easily accessible and promote integration.",
        footer_quicklinks: "Quick Links",
        footer_contact: "Contact",
        footer_hours: "Opening Hours",
        footer_hours_weekday: "Mon-Fri: 9:00 AM - 8:00 PM",
        footer_hours_saturday: "Sat: 10:00 AM - 3:00 PM",
        footer_hours_sunday: "Sun: Closed",
        footer_copyright: "Copyright © 2025 SmartGerman. All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_imprint: "Imprint",
        
        // Registration Modal
        modal_register_title: "Register for a German Course Now",
        modal_register_firstname: "First Name*",
        modal_register_lastname: "Last Name*",
        modal_register_email: "Email*",
        modal_register_phone: "Phone",
        modal_register_course: "Course*",
        modal_register_course_select: "Please select",
        modal_register_level_title: "Language Level",
        modal_register_level1: "No prior knowledge",
        modal_register_level2: "Basic knowledge available",
        modal_register_level3: "Not sure (placement test desired)",
        modal_register_info: "Additional information or questions",
        modal_register_consent: "I agree that my data will be stored and used to process my request.*",
        modal_register_submit: "Submit Registration",
        modal_register_required: "* Required fields",
        modal_register_note: "After receiving your registration, we will contact you within 24 hours for additional information and to schedule an appointment.",
        
        // Login Modal
        modal_login_title: "Login",
        modal_login_email: "Email Address*",
        modal_login_password: "Password*",
        modal_login_forgot: "Forgot password?",
        modal_login_submit: "Login",
        modal_login_no_account: "Don't have an account yet?",
        modal_login_register: "Register now",
        
        // Account Section
        account_title: "My Account",
        account_welcome: "Welcome",
        account_not_logged_in: "Not logged in",
        account_login_required: "Login required",
        account_login_text: "Please log in with your credentials to view your account details.",
        account_login_button: "Login",
        account_register_button: "Register",
        account_login_note: "After registration you will receive your login credentials by email.",
        
        account_tab_overview: "Overview",
        account_tab_profile: "Edit Profile",
        account_tab_courses: "My Courses",
        account_tab_invoices: "Invoices",
        account_tab_messages: "Messages",
        account_tab_settings: "Settings",
        account_tab_community: "Community",
        
        // Messages
        msg_success_register: "Thank you for your registration! You will shortly receive an email with your login credentials.",
        msg_success_login: "Successfully logged in!",
        msg_success_logout: "You have been successfully logged out.",
        msg_error_login: "Login failed",
        msg_error_fields: "Please fill in all required fields.",
        msg_loading_courses: "Loading courses...",

        // Contact
        contact_phone: "Phone",
        contact_email: "Email",
        
        // Privacy Policy
        privacy_title: "Privacy Policy",
        privacy_updated: "Last updated: March 2025",
        privacy_responsible_title: "1. Responsible Party",
        privacy_responsible_text: "Responsible for the collection, processing and use of your personal data within the meaning of the General Data Protection Regulation (GDPR):",
        privacy_company_name: "SmartGerman Language School",
        privacy_data_title: "2. Collection and Processing of Personal Data",
        privacy_data_intro: "Personal data is information that can be used to learn your identity. This includes information such as your real name, address, postal address or telephone number. We only collect, process and use personal data when it is necessary to provide our services or you have voluntarily provided it to us.",
        privacy_website_title: "2.1 Visiting Our Website",
        privacy_website_text: "When you visit our website, we collect the following data that is technically necessary for us to display our website and ensure stability and security:",
        privacy_website_list_item1: "IP address",
        privacy_website_list_item2: "Date and time of the request",
        privacy_website_list_item3: "Time zone difference to Greenwich Mean Time (GMT)",
        privacy_website_list_item4: "Content of the request (specific page)",
        privacy_website_list_item5: "Access status/HTTP status code",
        privacy_website_list_item6: "Amount of data transferred",
        privacy_website_list_item7: "Website from which the request comes",
        privacy_website_list_item8: "Browser",
        privacy_website_list_item9: "Operating system and its interface",
        privacy_website_list_item10: "Language and version of the browser software",
        privacy_contact_title: "2.3 Course Registration",
        privacy_contact_text: "When you register for one of our courses, we collect the following data:",
        privacy_registration_list_item1: "First and last name",
        privacy_registration_list_item2: "Contact details (email, phone)",
        privacy_registration_list_item3: "Desired course and course format",
        privacy_registration_list_item4: "Language level",
        privacy_registration_list_item5: "Other information you voluntarily provide",
        privacy_cookies_title: "3. Cookies",
        privacy_cookies_intro: "Our website uses cookies. Cookies are small text files that are stored on your device and contain certain settings and data for exchange with our system via your browser.",
        privacy_rights_title: "4. Your Rights",
        privacy_rights_intro: "You have the following rights regarding your personal data:",
        privacy_rights_list_item1: "Right to information",
        privacy_rights_list_item2: "Right to correction or deletion",
        privacy_rights_list_item3: "Right to restriction of processing",
        privacy_rights_list_item4: "Right to object to processing",
        privacy_rights_list_item5: "Right to data portability",
        privacy_changes_title: "5. Changes to Privacy Policy",
        privacy_changes_text: "We reserve the right to adjust this privacy policy so that it always complies with current legal requirements or to implement changes to our services in the privacy policy.",
        back_to_home: "Back to Homepage",
        
        // Imprint
        imprint_title: "Imprint",
        imprint_info_title: "Information according to § 5 TMG",
        imprint_represented_title: "Represented by",
        imprint_represented_note: "[Please replace this with the actual name of the managing director/owner]",
        imprint_contact_title: "Contact",
        imprint_vat_title: "VAT ID",
        imprint_vat_text: "VAT identification number according to § 27 a Value Added Tax Act:",
        imprint_vat_note: "[Please replace this with your actual VAT ID]",
        imprint_profession_title: "Professional designation and professional regulations",
        imprint_profession_text: "Professional designation: Language School",
        imprint_authority: "Competent supervisory authority: [Please add the authority responsible for you]",
        imprint_dispute_title: "Dispute Resolution",
        imprint_dispute_text: "The European Commission provides a platform for online dispute resolution (OS):",
        imprint_dispute_note: "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
        imprint_liability_content_title: "Liability for Content",
        imprint_liability_links_title: "Liability for Links",
        imprint_copyright_title: "Copyright",
        back_to_home: "Back to Homepage",

        modal_register_privacy_accept: 'I agree that my data will be stored and used in accordance with the',
        modal_register_privacy_link: 'Privacy Policy',
        modal_register_privacy_accept_end: 'to process my request.*',

        // CV
        about_cv_button: "My Career Path",
        cv_modal_title: "Career Path of Anastasia Sitov",
        cv_education_title: "Education",
        cv_experience_title: "Work Experience",
        cv_skills_title: "Additional Skills",
        cv_skills_languages_title: "Languages",
        cv_skills_daz_title: "German as a Second and Foreign Language",
        cv_modal_close: "Close",
        cv_education_item2_date: "2010 – 2018",
        cv_education_item2_desc: "Gymnasium Stolzenau",
        cv_education_item3_date: "2018 – 2022",
        cv_education_item3_desc: "Leibniz University Hannover, Interdisciplinary Bachelor in Biology (Major) and German (Minor) - Degree: Bachelor of Science",
        cv_education_item5_date: "Since 10/2022",
        cv_education_item5_desc: "Master's program for teaching at Leibniz University Hannover (Target degree: Master of Education)",
        cv_experience_item1_date: "09/2020 – 09/2022",
        cv_experience_item1_desc: "Tutor at Lister Lernmeile",
        cv_experience_item4_date: "10/2022 – 07/2023",
        cv_experience_item4_desc: "Language teacher for a Ukrainian welcome class at the Elsa-Brändström-Schule Hannover",
        cv_experience_item5_date: "Since 09/2023",
        cv_experience_item5_desc: "German course instructor at the Ukrainian Association in Lower Saxony",
        cv_experience_item6_date: "10/2023 – 07/2025",
        cv_experience_item6_desc: "Student assistant at Leibniz University Hannover in the field of German as a Foreign and Second Language",
        cv_skills_languages_item1: "German (Native)",
        cv_skills_languages_item2: "Russian (Native)",
        cv_skills_languages_item3: "English (fluent, written and spoken)",
        cv_skills_languages_item4: "French (basic knowledge)",
        cv_skills_languages_item5: "Turkish (preparing for A2 certification; A1 completed)",
        cv_skills_daz_item1: "Acquisition of the certificate 'International and Intercultural Competences for Teaching: Multilingualism and Education' at Leibniz University Hannover."
    }
};

// Aktuelle Sprache (Standard: Deutsch)
let currentLanguage = localStorage.getItem('smartgerman_language') || 'de';

// Funktion zum Wechseln der Sprache
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('smartgerman_language', lang);
    updatePageLanguage();
    updateLanguageButton();
}

// Funktion zum Aktualisieren aller Texte auf der Seite
function updatePageLanguage() {
    const t = translations[currentLanguage];
    
    // Alle Elemente mit data-i18n Attribut aktualisieren
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            // Für input placeholders
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
    
    // Kurs-Select aktualisieren wenn vorhanden
    updateCourseSelect();
}

// Funktion zum Aktualisieren des Sprach-Buttons
function updateLanguageButton() {
    const langBtn = document.getElementById('languageBtn');
    if (langBtn) {
        langBtn.textContent = currentLanguage === 'de' ? '🇷🇺 RU' : '🇩🇪 DE';
        langBtn.title = currentLanguage === 'de' ? 'Auf Russisch wechseln' : 'Переключить на немецкий';
    }
}

// Funktion zum Aktualisieren des Kurs-Selects
function updateCourseSelect() {
    const courseSelect = document.getElementById('course_id');
    if (courseSelect && courseSelect.options.length > 1) {
        const firstOption = courseSelect.options[0];
        firstOption.textContent = translations[currentLanguage].modal_register_course_select;
    }
}

// Bei Seitenladung die gespeicherte Sprache anwenden
document.addEventListener('DOMContentLoaded', function() {
    updatePageLanguage();
    updateLanguageButton();
});

// Export für Verwendung in anderen Scripts
if (typeof window !== 'undefined') {
    window.translations = translations;
    window.currentLanguage = currentLanguage;
    window.changeLanguage = changeLanguage;
    window.updatePageLanguage = updatePageLanguage;
}