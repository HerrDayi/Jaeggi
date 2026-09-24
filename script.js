/**
 * Rahel Jaeggi: Entfremdung (2005)
 * Interaktive Texterschließung, Glossar & Stufenhilfen
 * Philosophie Q1 • Herr Dayi
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. SYSTEMATISCHE BEGRIFFSDATENBANK
    // =========================================================================
    const vocabDatabase = {
        'Indifferenz und Entzweiung': {
            type: '1. Phänomenologischer Grundbegriff',
            def: 'Gleichgültigkeit (Indifferenz) und innerer Bruch bzw. Zerrissenheit (Entzweiung). Das Subjekt fühlt sich von der eigenen Welt abgeschnitten und steht seinen Tätigkeiten distanziert gegenüber.',
            context: 'Entfremdung beginnt dort, wo uns das, was wir tun, innerlich kaltlässt. Man funktioniert zwar im Alltag, erlebt die Welt aber als sinn- und bedeutungslos erstarrt.'
        },
        'Machtlosigkeit & Beziehungslosigkeit': {
            type: '1. Subjekttheoretischer Begriff',
            def: 'Der Verlust von Einfluss- und Gestaltungskraft; das Unvermögen, zu Menschen, Dingen und gesellschaftlichen Institutionen eine lebendige, wechselseitige Bindung herzustellen.',
            context: 'Wer entfremdet ist, erlebt sich nicht als wirksamer Urheber seines Handelns, sondern als ohnmächtiges Rädchen in einem System, das man nicht beeinflussen kann.'
        },
        'Nicht »zu Hause« sein': {
            type: '1. Existentielles Motiv (Marx-Bezug)',
            def: 'Das Gefühl existenzieller Fremdheit und Heimatlosigkeit in den eigenen Tätigkeiten und den gesellschaftlichen Verhältnissen.',
            context: 'Direkte Anknüpfung an Karl Marx (1844): Der Arbeiter fühlt sich in seiner Tätigkeit nicht daheim, sondern erst außerhalb ihrer. Jaeggi zeigt: Auch der moderne Arbeitende im Loft-Büro ist in seinen Rollen oft nicht wirklich »zu Hause«.'
        },
        'Entmächtigung der Subjekte': {
            type: '2. Herrschaftskritischer Begriff',
            def: 'Der Zustand, in dem Individuen ihre Souveränität und Selbstbestimmung einbüßen, obwohl sie scheinbar frei und ungezwungen agieren.',
            context: 'Die Herrschaft im Spätkapitalismus funktioniert nicht mehr über sichtbare Gewalt, sondern über verinnerlichte Sachzwänge, Rollen und Institutionen, die uns beherrschen.'
        },
        'Täter und Opfer zugleich': {
            type: '2. Dialektischer Kernbegriff (Paradoxie)',
            def: 'Die paradoxe Lage des modernen Menschen: Wir leiden unter entfremdeten Strukturen (Opfer), bringen diese Strukturen aber durch unser tägliches Mitspielen selbst hervor (Täter).',
            context: 'Niemand zwingt uns von außen; wir spielen die vorgegebenen Rollen perfekt, eignen uns Optimierungsdruck selbst an und stabilisieren so die Verhältnisse, die uns entmachten.'
        },
        'Beziehung der Beziehungslosigkeit': {
            type: '3. Sozialontologische Kerndefinition (Jaeggi)',
            def: 'Entfremdung ist keine bloße Abwesenheit oder der Kontaktabbruch, sondern eine spezifische, negativ blockierte Beziehungsform – eine stumme, distanzierte, instrumentelle Beziehung.',
            context: 'Jaeggis berühmteste Definition: Man bricht die Beziehung zur Welt nicht ab. Man geht zur Arbeit, redet mit Kollegen, nutzt Institutionen – aber in der Haltung innerer Indifferenz und Nicht-Beteiligung.'
        },
        'Aneignungsvollzüge (Appropriation)': {
            type: '4. Positiver Gegenbegriff / Emanzipation',
            def: 'Der aktive Vollzug, sich Rollen, Dinge und Lebensbedingungen gestaltend zu eigen zu machen, ihnen Sinn zu verleihen und sich als deren Urheber zu begreifen.',
            context: 'Gelingendes Menschsein zeigt sich in gelingender Aneignung: Ich erfülle eine Aufgabe nicht bloß mechanisch, sondern identifiziere mich mit ihr und drücke meine eigene Persönlichkeit darin aus.'
        },
        'Defiziente Praxis': {
            type: '4. Handlungstheoretischer Begriff',
            def: 'Eine mangelhafte, fehlgeschlagene oder blockierte Form des praktischen Tuns und Lebensvollzugs.',
            context: 'Entfremdung ist für Jaeggi keine seelische Krankheit oder Laune, sondern eine defiziente Lebenspraxis: Man handelt, aber das Handeln gelingt nicht als sinnerfüllte Selbstverwirklichung.'
        },
        'Zu Voraussetzungen verhalten': {
            type: '4. Reflexiv-kritisches Freiheitskonzept',
            def: 'Die Fähigkeit, die gesellschaftlichen und biografischen Ausgangsbedingungen des eigenen Lebens nicht als starre Schicksalstatsache hinzunehmen, sondern sie reflexiv zu hinterfragen und aktiv mitzugestalten.',
            context: 'Freiheit bedeutet nach Jaeggi: Wer sich zu seinen Voraussetzungen nicht verhalten und sie sich nicht aneignen kann, bleibt entfremdet. Wer sie aneignet, gewinnt echte Autonomie.'
        },
        'Vermögen zur aktiven Aneignung': {
            type: '5. Positives Gegenmodell gelingenden Lebens',
            def: 'Die subjektive Fähigkeit und gesellschaftliche Möglichkeit, sich die vorgefundenen Lebensverhältnisse, Tätigkeiten und Rollen gestaltend zu eigen zu machen.',
            context: 'Gelingendes Leben erschöpft sich nicht im Konsumieren oder bloßen Auswählen vorgefertigter Angebote, sondern verlangt die aktive Durchdringung der eigenen Praxis.'
        },
        'Projekte vorantreiben': {
            type: '5. Existenzielle Handlungstheorie',
            def: 'Das selbstbestimmte Verfolgen von bedeutungsvollen Zielen im eigenen Leben, anstatt fremdbestimmte Tagesroutinen bloß abzuarbeiten.',
            context: 'Wer sein eigenes Leben führt, gestaltet Vorhaben, für die man innerlich brennt und deren Gelingen einem persönlich am Herzen liegt.'
        },
        'Identifizieren': {
            type: '5. Psychologische & philosophische Integration',
            def: 'Der Zustand der inneren Übereinstimmung mit dem eigenen Tun; das Gegenteil von innerer Distanzierung oder zynischer Gleichgültigkeit.',
            context: 'Wenn ich mich mit meinen Rollen identifizieren kann, erlebe ich sie nicht mehr als bedrückendes Gefängnis oder falsche Maske, sondern als authentischen Ausdruck meiner selbst.'
        },
        'Wirklicher Urheber': {
            type: '5. Subjektphilosophischer Kernbegriff (Autorschaft)',
            def: 'Das existenzielle Erleben, nicht fremdgesteuert oder passives Opfer äußerer Mächte zu sein, sondern die Quelle und der Gestalter der eigenen Handlungen.',
            context: 'Für Jaeggi ist man genau dort frei, wo man sich als wirklicher Autor des eigenen Tuns erfährt – nicht bloß als Funktionär einer vorgegebenen Struktur.'
        }
    };

    // =========================================================================
    // 2. DOM-ELEMENTE
    // =========================================================================
    const vocabCard = document.getElementById('vocab-card');
    const vocabPlaceholder = document.getElementById('vocab-placeholder');
    const vocabContent = document.getElementById('vocab-content');
    const vocabTitle = document.getElementById('vocab-title');
    const vocabType = document.getElementById('vocab-type');
    const vocabDef = document.getElementById('vocab-definition');
    const vocabContext = document.getElementById('vocab-context');

    const vocabTerms = document.querySelectorAll('.vocab-term');
    const chapTabBtns = document.querySelectorAll('.chap-tab-btn');
    const chapPanels = document.querySelectorAll('.chap-panel');

    // =========================================================================
    // 3. GLOSSAR-INTERAKTION
    // =========================================================================
    function showVocab(termKey) {
        const data = vocabDatabase[termKey];
        if (!data) return;

        vocabTerms.forEach(t => t.classList.remove('active'));
        document.querySelectorAll(`.vocab-term[data-term="${termKey}"]`).forEach(t => t.classList.add('active'));

        vocabTitle.textContent = termKey;
        vocabType.textContent = data.type;
        vocabDef.textContent = data.def;
        vocabContext.textContent = data.context;

        vocabPlaceholder.classList.add('hidden');
        vocabContent.classList.remove('hidden');

        if (window.innerWidth < 768 && vocabCard) {
            vocabCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    vocabTerms.forEach(termSpan => {
        termSpan.addEventListener('click', (e) => {
            e.stopPropagation();
            const termKey = termSpan.getAttribute('data-term');
            showVocab(termKey);
        });
    });

    // =========================================================================
    // 4. TAB-NAVIGATION (Text vs. Stufenhilfen)
    // =========================================================================
    chapTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-chap-tab');

            chapTabBtns.forEach(b => b.classList.remove('active'));
            chapPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetPanel = document.getElementById(`chap-panel-${targetTab}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // =========================================================================
    // 5. ACCORDION FÜR STUFENHILFEN
    // =========================================================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            const isOpen = body.style.display === 'block';

            // Schließen aller anderen im selben Accordion-Container
            const parent = header.closest('.accordion-group');
            if (parent) {
                parent.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
                parent.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('open'));
            }

            if (!isOpen) {
                body.style.display = 'block';
                header.classList.add('open');
            } else {
                body.style.display = 'none';
                header.classList.remove('open');
            }
        });
    });

    // =========================================================================
    // 6. FONT-SIZE & THEME TOGGLE
    // =========================================================================
    let currentScale = 1.0;
    const btnTextInc = document.getElementById('btn-text-increase');
    const btnTextDec = document.getElementById('btn-text-decrease');

    if (btnTextInc && btnTextDec) {
        btnTextInc.addEventListener('click', () => {
            if (currentScale < 1.35) {
                currentScale += 0.08;
                document.documentElement.style.setProperty('--text-scale', `${currentScale}rem`);
            }
        });

        btnTextDec.addEventListener('click', () => {
            if (currentScale > 0.85) {
                currentScale -= 0.08;
                document.documentElement.style.setProperty('--text-scale', `${currentScale}rem`);
            }
        });
    }

    const btnThemeToggle = document.getElementById('btn-theme-toggle');
    const themeText = document.getElementById('theme-text');

    if (btnThemeToggle) {
        btnThemeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            if (themeText) {
                themeText.textContent = isDark ? 'Hellmodus' : 'Dunkelmodus';
            }
            try {
                localStorage.setItem('dayi_theme_jaeggi', isDark ? 'dark' : 'light');
            } catch (e) {}
        });

        try {
            const savedTheme = localStorage.getItem('dayi_theme_jaeggi');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
                if (themeText) themeText.textContent = 'Hellmodus';
            }
        } catch (e) {}
    }
});
