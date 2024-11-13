import mdx from "@astrojs/mdx"
import { defineConfig } from "astro/config"
import icon from "astro-icon"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { SITE_URL } from "./src/consts"

// https://astro.build/config
export default defineConfig({
	integrations: [
		icon({
			include: {
				mdi: [
					"arrow-right-thin",
					"close-circle",
					"email",
					"facebook",
					"filter-menu-outline",
					"instagram",
					"link-variant",
					"linkedin",
					"menu-down",
					"navigate-before",
					"navigate-next",
					"rss",
					"skip-next",
					"skip-previous",
					"twitter",
					"youtube"
				]
			}
		}),
		tailwind({
			config: {
				applyBaseStyles: false
			}
		}),
		sitemap(),
		mdx()
	],
	output: "hybrid",
	site: SITE_URL,
	redirects: {
		"/code-smells": "/blog/glossary/code-smells",
		"/effective-teams": "/blog/glossary/effective-teams",
		"/team-launch": "/blog/glossary/team-launch",
		"/onboarding": "/blog/glossary/onboarding",
		"/personal-readme": "/blog/glossary/personal-readme",
		"/impediments": "/blog/glossary/impediments",
		"/spotify-model": "/blog/glossary/spotify-model",
		"/diversity": "/blog/glossary/diversity",
		"/self-selecting-teams": "/blog/glossary/self-selecting-teams",
		"/healthy-teams": "/blog/glossary/healthy-teams",
		"/community-of-practice": "/blog/glossary/community-of-practice",
		"/feedback": "/blog/glossary/feedback",
		"/bottlenecks": "/blog/glossary/bottlenecks",
		"/arc-motivational-model": "/blog/glossary/arc-motivational-model",
		"/theory-of-constraints": "/blog/glossary/theory-of-constraints",
		"/lean-startup-experiments": "/blog/glossary/lean-startup-experiments",
		"/scrummaster-anti-patterns": "/blog/glossary/scrummaster-anti-patterns",
		"/code-reviews": "/blog/glossary/code-reviews",
		"/minimum-viable-product-mvp": "/blog/glossary/minimum-viable-product-mvp",
		"/10-minute-build": "/blog/glossary/10-minute-build",
		"/agile-documentation": "/blog/glossary/agile-documentation",
		"/servant-leadership": "/blog/glossary/servant-leadership",
		"/safety-check": "/blog/glossary/safety-check",
		"/failure-demand": "/blog/glossary/failure-demand",
		"/agile-outside-of-software": "/blog/glossary/agile-outside-of-software",
		"/fake-agile": "/blog/glossary/fake-agile",
		"/agile-schools": "/blog/glossary/agile-schools",
		"/agile-government": "/blog/glossary/agile-government",
		"/agile-sales-and-marketing": "/blog/glossary/agile-sales-and-marketing",
		"/empathy-map": "/blog/glossary/empathy-map",
		"/part-time-team-members": "/blog/glossary/part-time-team-members",
		"/liberating-structures": "/blog/glossary/liberating-structures",
		"/swarming": "/blog/glossary/swarming",
		"/morale": "/blog/glossary/morale",
		"/decision-making-tools": "/blog/glossary/decision-making-tools",
		"/work-week": "/blog/glossary/work-week",
		"/developers": "/blog/glossary/developers",
		"/scrummaster-role": "/blog/glossary/scrummaster-role",
		"/iterative-incremental-development": "/blog/glossary/iterative-incremental-development",
		"/quality-assurance-in-scrum": "/blog/glossary/quality-assurance-in-scrum",
		"/agile-architectural-patterns": "/blog/glossary/agile-architectural-patterns",
		"/agile-architects": "/blog/glossary/agile-architects",
		"/user-story-splitting": "/blog/glossary/user-story-splitting",
		"/agile-architecture": "/blog/glossary/agile-architecture",
		"/scrum-vs-kanban": "/blog/glossary/scrum-vs-kanban",
		"/agile-business-intelligence": "/blog/glossary/agile-business-intelligence",
		"/agile-game-development": "/blog/glossary/agile-game-development",
		"/niko-niko": "/blog/glossary/niko-niko",
		"/project-vs-product": "/blog/glossary/project-vs-product",
		"/when-to-use-scrum": "/blog/glossary/when-to-use-scrum",
		"/motivation": "/blog/glossary/motivation",
		"/failure-modes": "/blog/glossary/failure-modes",
		"/collective-code-ownership": "/blog/glossary/collective-code-ownership",
		"/improvement-experiments": "/blog/glossary/improvement-experiments",
		"/scaling": "/blog/glossary/scaling",
		"/safe-scaled-agile-framework": "/blog/glossary/safe-scaled-agile-framework",
		"/bugs": "/blog/glossary/bugs",
		"/approval-tests": "/blog/glossary/approval-tests",
		"/refactoring": "/blog/glossary/refactoring",
		"/ensemble-programming": "/blog/glossary/ensemble-programming",
		"/continuous-delivery": "/blog/glossary/continuous-delivery",
		"/pair-programming": "/blog/glossary/pair-programming",
		"/legacy-code-and-systems": "/blog/glossary/legacy-code-and-systems",
		"/technical-debt": "/blog/glossary/technical-debt",
		"/business-analyst-in-scrum": "/blog/glossary/business-analyst-in-scrum",
		"/prioritization": "/blog/glossary/prioritization",
		"/product-owner-role": "/blog/glossary/product-owner-role",
		"/systems-thinking": "/blog/glossary/systems-thinking",
		"/cumulative-flow-diagram": "/blog/glossary/cumulative-flow-diagram",
		"/lean_software_development": "/blog/glossary/lean_software_development",
		"/lean-startup": "/blog/glossary/lean-startup",
		"/persona": "/blog/glossary/persona",
		"/metrics-and-measurement": "/blog/glossary/metrics-and-measurement",
		"/tdd-vs-bdd": "/blog/glossary/tdd-vs-bdd",
		"/security-in-scrum": "/blog/glossary/security-in-scrum",
		"/agile-lean-ux": "/blog/glossary/agile-lean-ux",
		"/behaviour-driven-development": "/blog/glossary/behaviour-driven-development",
		"/test-driven-development": "/blog/glossary/test-driven-development",
		"/branching-strategies": "/blog/glossary/branching-strategies",
		"/production-support": "/blog/glossary/production-support",
		"/roadmaps-and-strategy": "/blog/glossary/roadmaps-and-strategy",
		"/core-protocols": "/blog/glossary/core-protocols",
		"/special-teams": "/blog/glossary/special-teams",
		"/zoom-fatigue": "/blog/glossary/zoom-fatigue",
		"/team-size": "/blog/glossary/team-size",
		"/stable-teams": "/blog/glossary/stable-teams",
		"/sprint-review": "/blog/glossary/sprint-review",
		"/sprint-planning": "/blog/glossary/sprint-planning",
		"/sprint-length": "/blog/glossary/sprint-length",
		"/sprint-goal": "/blog/glossary/sprint-goal",
		"/psychological-safety": "/blog/glossary/psychological-safety",
		"/scrum-team": "/blog/glossary/scrum-team",
		"/product-backlog-refinement": "/blog/glossary/product-backlog-refinement",
		"/product-backlog": "/blog/glossary/product-backlog",
		"/scrum": "/blog/glossary/scrum",
		"/portfolio-management": "/blog/glossary/portfolio-management",
		"/agile-contracts": "/blog/glossary/agile-contracts",
		"/colocation": "/blog/glossary/colocation",
		"/impact-of-agile": "/blog/glossary/impact-of-agile",
		"/unit-testing": "/blog/glossary/unit-testing",
		"/continuous-integration": "/blog/glossary/continuous-integration",
		"/working-agreements": "/blog/glossary/working-agreements",
		"/interruptions": "/blog/glossary/interruptions",
		"/forecasting": "/blog/glossary/forecasting",
		"/estimation": "/blog/glossary/estimation",
		"/extreme-programming": "/blog/glossary/extreme-programming",
		"/distributed-teams": "/blog/glossary/distributed-teams",
		"/dependencies": "/blog/glossary/dependencies",
		"/daily-scrum": "/blog/glossary/daily-scrum",
		"/coaching": "/blog/glossary/coaching",
		"/case-studies": "/blog/glossary/case-studies",
		"/burndowns": "/blog/glossary/burndowns",
		"/agile-for-embedded-software": "/blog/glossary/agile-for-embedded-software",
		"/agile-mainframe-development": "/blog/glossary/agile-mainframe-development",
		"/agile-hardware": "/blog/glossary/agile-hardware",
		"/slack": "/blog/glossary/slack",
		"/acceptance-criteria": "/blog/glossary/acceptance-criteria",
		"/sprint-backlog": "/blog/glossary/sprint-backlog",
		"/devops": "/blog/glossary/devops",
		"/causal-loop-diagram": "/blog/glossary/causal-loop-diagram",
		"/team-formation-models": "/blog/glossary/team-formation-models",
		"/anti-patterns": "/blog/glossary/anti-patterns",
		"/organizational-structure": "/blog/glossary/organizational-structure",
		"/definition-of-done": "/blog/glossary/definition-of-done",
		"/pull-requests": "/blog/glossary/pull-requests",
		"/user-story": "/blog/glossary/user-story",
		"/cross-functional-teams": "/blog/glossary/cross-functional-teams",
		"/scarf-model": "/blog/glossary/scarf-model",
		"/dot-voting": "/blog/glossary/dot-voting",
		"/scrummerfall": "/blog/glossary/scrummerfall",
		"/cross-skilling": "/blog/glossary/cross-skilling",
		"/definition-of-ready": "/blog/glossary/definition-of-ready",
		"/story-mapping": "/blog/glossary/story-mapping",
		"/sprint-retrospective": "/blog/glossary/sprint-retrospective",
		"/impact-mapping": "/blog/glossary/impact-mapping",
		"/agile-engineering-practices": "/blog/glossary/agile-engineering-practices",
		"/vision": "/blog/glossary/vision",
		"/appreciative-inquiry": "/blog/glossary/appreciative-inquiry",
		"/sprint": "/blog/glossary/sprint",
		"/cycle-time": "/blog/glossary/cycle-time",
		"/facilitation": "/blog/glossary/facilitation",
		"/agile": "/blog/glossary/agile",
		"/multitasking": "/blog/glossary/multitasking",
		"/complexity": "/blog/glossary/complexity",
		"/less-large-scale-scrum": "/blog/glossary/less-large-scale-scrum",
		"/testing": "/blog/glossary/testing",
		"/kanban": "/blog/glossary/kanban",
		"/work-in-progress": "/blog/glossary/work-in-progress",
		"/self-organization": "/blog/glossary/self-organization",
		"/resource-utilization-trap": "/blog/glossary/resource-utilization-trap",
		"/dear-former-prime-minister": "/blog/posts/dear-former-prime-minister",
		"/measurement-for-scrum-what-are-appropriate-measures":
			"/blog/posts/measurement-for-scrum-what-are-appropriate-measures",
		"/magic-of-science-and-teams-presentation":
			"/blog/posts/magic-of-science-and-teams-presentation",
		"/its-not-scrum-if": "/blog/posts/its-not-scrum-if",
		"/when-to-stop-holding-retrospectives": "/blog/posts/when-to-stop-holding-retrospectives",
		"/random-notes-on-staying-a-little-bit-organized":
			"/blog/posts/random-notes-on-staying-a-little-bit-organized",
		"/tdd-adoption-strategies-article": "/blog/posts/tdd-adoption-strategies-article",
		"/why-i-speak-of-agilescrum-and-not-xp": "/blog/posts/why-i-speak-of-agilescrum-and-not-xp",
		"/recent-readings-of-interest": "/blog/posts/recent-readings-of-interest",
		"/writing-clean-testable-code": "/blog/posts/writing-clean-testable-code",
		"/is-there-value-in-the-noika-test": "/blog/posts/is-there-value-in-the-noika-test",
		"/tdd-randori-workshop": "/blog/posts/tdd-randori-workshop",
		"/advantages-of-tdd": "/blog/posts/advantages-of-tdd",
		"/tdd-randori-session": "/blog/posts/tdd-randori-session",
		"/meeting-ground-rules-updated": "/blog/posts/meeting-ground-rules-updated",
		"/minimally-agile": "/blog/posts/minimally-agile",
		"/solve-your-task": "/blog/posts/solve-your-task",
		"/best-agile-bo-2": "/blog/posts/best-agile-bo-2",
		"/best-agile-bo-1": "/blog/posts/best-agile-bo-1",
		"/best-agile-book": "/blog/posts/best-agile-book",
		"/working-at-a-di": "/blog/posts/working-at-a-di",
		"/protected-varia": "/blog/posts/protected-varia",
		"/dont-call-overr": "/blog/posts/dont-call-overr",
		"/agile_architect-2": "/blog/posts/agile_architect-2",
		"/when_to_estimat": "/blog/posts/when_to_estimat",
		"/i_was_wrong_abo": "/blog/posts/i_was_wrong_abo",
		"/example-mapping-your-secret-weapon-for-effective-acceptance-criteria":
			"/blog/posts/example-mapping-your-secret-weapon-for-effective-acceptance-criteria",
		"/how-to-get-the-c-suite-to-support-agile-the-state-of-scrum-red-hats-agile-success":
			"/blog/posts/how-to-get-the-c-suite-to-support-agile-the-state-of-scrum-red-hats-agile-success",
		"/to-get-bang-for-your-buck-try-impact-mapping":
			"/blog/posts/to-get-bang-for-your-buck-try-impact-mapping",
		"/red-yellow-green-or-rygrag-reports-how-they-hide-the-truth":
			"/blog/posts/red-yellow-green-or-rygrag-reports-how-they-hide-the-truth",
		"/50-million-phoenix-fix-avoiding-disaster-with-scrum":
			"/blog/posts/50-million-phoenix-fix-avoiding-disaster-with-scrum",
		"/forcing-people-back-to-the-office": "/blog/posts/forcing-people-back-to-the-office",
		"/sprint-goals-provide-purpose": "/blog/posts/sprint-goals-provide-purpose",
		"/scrummaster-tales-the-team-gets-bottlenecked":
			"/blog/posts/scrummaster-tales-the-team-gets-bottlenecked",
		"/agile-games-for-making-retrospectives-interesting":
			"/blog/posts/agile-games-for-making-retrospectives-interesting",
		"/modern-guide-to-daily-scrum-meeting": "/blog/posts/modern-guide-to-daily-scrum-meeting",
		"/same-old-song-in-sprint-retrospective": "/blog/posts/same-old-song-in-sprint-retrospective",
		"/misuse-of-velocity-in-agile-projects": "/blog/posts/misuse-of-velocity-in-agile-projects",
		"/a-community-of-thinkers-a-personal-commitment":
			"/blog/posts/a-community-of-thinkers-a-personal-commitment",
		"/more-notes-on-story-splitting": "/blog/posts/more-notes-on-story-splitting",
		"/scrum-team-scrummerfall": "/blog/posts/scrum-team-scrummerfall",
		"/agile-change-or-adoption-always-starts-with-why":
			"/blog/posts/agile-change-or-adoption-always-starts-with-why",
		"/blind-estimation-planning-poker": "/blog/posts/blind-estimation-planning-poker",
		"/scrum-product-backlog-refinement": "/blog/posts/scrum-product-backlog-refinement",
		"/misconceptions-with-test-driven-development":
			"/blog/posts/misconceptions-with-test-driven-development",
		"/scrummaster-tales-learning-how-to-estimate":
			"/blog/posts/scrummaster-tales-learning-how-to-estimate",
		"/agile-gurus-or-thought-leaders": "/blog/posts/agile-gurus-or-thought-leaders",
		"/reviewing-the-review-process-for-agile-2009":
			"/blog/posts/reviewing-the-review-process-for-agile-2009",
		"/scrum-case-studies": "/blog/posts/scrum-case-studies",
		"/bell-curves-and-measuring-badly": "/blog/posts/bell-curves-and-measuring-badly",
		"/a-rebuttal-of-groupthink": "/blog/posts/a-rebuttal-of-groupthink",
		"/does-your-grocery-store-limit-work-in-progress":
			"/blog/posts/does-your-grocery-store-limit-work-in-progress",
		"/time-to-go": "/blog/posts/time-to-go",
		"/coaching-self-organizing-teams": "/blog/posts/coaching-self-organizing-teams",
		"/scrum-development-team-whos-in-it": "/blog/posts/scrum-development-team-whos-in-it",
		"/two-key-things-for-sprint-retrospective-facilitation":
			"/blog/posts/two-key-things-for-sprint-retrospective-facilitation",
		"/agile-2008-a-personal-retrospective": "/blog/posts/agile-2008-a-personal-retrospective",
		"/deal-with-bad-scrum-user-stories-as-a-scrummaster":
			"/blog/posts/deal-with-bad-scrum-user-stories-as-a-scrummaster",
		"/agile-retrospectives": "/blog/posts/agile-retrospectives",
		"/future-perspective-for-organizational-change":
			"/blog/posts/future-perspective-for-organizational-change",
		"/what-united-can-teach-us-about-building-systems":
			"/blog/posts/what-united-can-teach-us-about-building-systems",
		"/scrum-anti-patterns": "/blog/posts/scrum-anti-patterns",
		"/in-agile-where-change-is-valued-why-is-a-stable-team-so-important":
			"/blog/posts/in-agile-where-change-is-valued-why-is-a-stable-team-so-important",
		"/scrummaster-for-three-teams-what-are-the-alternatives":
			"/blog/posts/scrummaster-for-three-teams-what-are-the-alternatives",
		"/learning-best-approaches-for-your-brain-slide-deck":
			"/blog/posts/learning-best-approaches-for-your-brain-slide-deck",
		"/scrummaster-tales-the-story-of-production-support":
			"/blog/posts/scrummaster-tales-the-story-of-production-support",
		"/agile-2009-post-roundup": "/blog/posts/agile-2009-post-roundup",
		"/why_are_we_so_e": "/blog/posts/why_are_we_so_e",
		"/transparency-bu": "/blog/posts/transparency-bu",
		"/creativity-for-agile-teams-2": "/blog/posts/creativity-for-agile-teams-2",
		"/is-there-a-best-day-to-start-and-finish-a-sprint":
			"/blog/posts/is-there-a-best-day-to-start-and-finish-a-sprint",
		"/influence_scien": "/blog/posts/influence_scien",
		"/influence_why_a": "/blog/posts/influence_why_a",
		"/agile-change-or-adoption-create-a-vision":
			"/blog/posts/agile-change-or-adoption-create-a-vision",
		"/agile-change-or-adoption-the-steps-to-go-from-why-to-how":
			"/blog/posts/agile-change-or-adoption-the-steps-to-go-from-why-to-how",
		"/welcome-to-the-high-performance-teams-game":
			"/blog/posts/welcome-to-the-high-performance-teams-game",
		"/onboard-new-people-without-losing-scrum-team-magic":
			"/blog/posts/onboard-new-people-without-losing-scrum-team-magic",
		"/lifecycle-of-a-user-story": "/blog/posts/lifecycle-of-a-user-story",
		"/pair-programmin": "/blog/posts/pair-programmin",
		"/daily-stand-up-variations": "/blog/posts/daily-stand-up-variations",
		"/choosing-scrum-sprint-length": "/blog/posts/choosing-scrum-sprint-length",
		"/agile-change-or-adoption-sense-your-current-culture":
			"/blog/posts/agile-change-or-adoption-sense-your-current-culture",
		"/simplicity": "/blog/posts/simplicity",
		"/software-development-is-not-a-form-of-construction":
			"/blog/posts/software-development-is-not-a-form-of-construction",
		"/scrum-anti-patterns-micromanagement": "/blog/posts/scrum-anti-patterns-micromanagement",
		"/test-driven-dev": "/blog/posts/test-driven-dev",
		"/how-escape-rooms-teach-about-teams": "/blog/posts/how-escape-rooms-teach-about-teams",
		"/scrummaster-tales-story-splitting-fun": "/blog/posts/scrummaster-tales-story-splitting-fun",
		"/does-scrum-work": "/blog/posts/does-scrum-work",
		"/scrum-production-support": "/blog/posts/scrum-production-support",
		"/why-scrum-works": "/blog/posts/why-scrum-works",
		"/why-scrum-works-2": "/blog/posts/why-scrum-works-2",
		"/which-mock-to-m": "/blog/posts/which-mock-to-m",
		"/tools-tools-too": "/blog/posts/tools-tools-too",
		"/yahoo-bans-work-home-alternative-perspective":
			"/blog/posts/yahoo-bans-work-home-alternative-perspective",
		"/agile_and_relat": "/blog/posts/agile_and_relat",
		"/agile-change-or-adoption-define-small-organizational-changes":
			"/blog/posts/agile-change-or-adoption-define-small-organizational-changes",
		"/multiple-returns-from-a-single-method": "/blog/posts/multiple-returns-from-a-single-method",
		"/good-agendas-ma": "/blog/posts/good-agendas-ma",
		"/scrummaster-tales-the-team-learn-how-to-learn":
			"/blog/posts/scrummaster-tales-the-team-learn-how-to-learn",
		"/forecasting-metrics-and-the-lies-that-a-single-number-tell-us":
			"/blog/posts/forecasting-metrics-and-the-lies-that-a-single-number-tell-us",
		"/creating-acceptance-criteria-waiting-too-long":
			"/blog/posts/creating-acceptance-criteria-waiting-too-long",
		"/looking-for-100-agile-voices-we-should-hear-more-from":
			"/blog/posts/looking-for-100-agile-voices-we-should-hear-more-from",
		"/because-our-competitors-are-is-no-reason-to-become-an-agile-organization":
			"/blog/posts/because-our-competitors-are-is-no-reason-to-become-an-agile-organization",
		"/agile-tools-for-job-search-an-evolving-post":
			"/blog/posts/agile-tools-for-job-search-an-evolving-post",
		"/scrummaster-tales-the-trouble-with-sprint-burndowns":
			"/blog/posts/scrummaster-tales-the-trouble-with-sprint-burndowns",
		"/jira-is-not-agile": "/blog/posts/jira-is-not-agile",
		"/stable-teams-really-do-matter": "/blog/posts/stable-teams-really-do-matter",
		"/dont-inflict-scrum-or-kanban-on-teams": "/blog/posts/dont-inflict-scrum-or-kanban-on-teams",
		"/the-culture-game-book-review": "/blog/posts/the-culture-game-book-review",
		"/early-feedback-reduces-anger-and-frustration":
			"/blog/posts/early-feedback-reduces-anger-and-frustration",
		"/scrummaster-tales-technical-user-stories-team-pull-fast-product-owner":
			"/blog/posts/scrummaster-tales-technical-user-stories-team-pull-fast-product-owner",
		"/team-friction-inspires-working-agreements":
			"/blog/posts/team-friction-inspires-working-agreements",
		"/scrummaster-tales-impediments-are-holding-back-the-team":
			"/blog/posts/scrummaster-tales-impediments-are-holding-back-the-team",
		"/scrummaster-tales-technical-debt-is-slowing-the-team":
			"/blog/posts/scrummaster-tales-technical-debt-is-slowing-the-team",
		"/scrum-team-size": "/blog/posts/scrum-team-size",
		"/the-humble-sprint-backlog": "/blog/posts/the-humble-sprint-backlog",
		"/the-scrummaster-tales": "/blog/posts/the-scrummaster-tales",
		"/story-splitting-a-play-spike-sherman": "/blog/posts/story-splitting-a-play-spike-sherman",
		"/scrummaster-tales-stop-digging-new-holes":
			"/blog/posts/scrummaster-tales-stop-digging-new-holes",
		"/agile-bonuses-the-damage-they-do": "/blog/posts/agile-bonuses-the-damage-they-do",
		"/how-sprint-planning-mistakes-can-derail-a-team":
			"/blog/posts/how-sprint-planning-mistakes-can-derail-a-team",
		"/how-to-be-an-effective-manager-in-scrum":
			"/blog/posts/how-to-be-an-effective-manager-in-scrum",
		"/agile-voices-finally": "/blog/posts/agile-voices-finally",
		"/mythbusting-c": "/blog/posts/mythbusting-c",
		"/story-slicing-how-small-is-enough": "/blog/posts/story-slicing-how-small-is-enough",
		"/product-owner-isn-business-analyst-steroids":
			"/blog/posts/product-owner-isn-business-analyst-steroids",
		"/scrum-without-removing-impediments-isnt-scrum":
			"/blog/posts/scrum-without-removing-impediments-isnt-scrum",
		"/be-better-with-better-data": "/blog/posts/be-better-with-better-data",
		"/the-role-of-agile-managers-why-job-titles-are-dangerous":
			"/blog/posts/the-role-of-agile-managers-why-job-titles-are-dangerous",
		"/scrummaster-tales-team-collaborate-acceptance-criteria":
			"/blog/posts/scrummaster-tales-team-collaborate-acceptance-criteria",
		"/beyond-scrum-blog-series": "/blog/posts/beyond-scrum-blog-series",
		"/5-steps-for-creating-high-performance-teams-ebook":
			"/blog/posts/5-steps-for-creating-high-performance-teams-ebook",
		"/agile-in-a-tweet": "/blog/posts/agile-in-a-tweet",
		"/scrum-is-simple-and-incomplete": "/blog/posts/scrum-is-simple-and-incomplete",
		"/scrum-master-tales-more-interruptions": "/blog/posts/scrum-master-tales-more-interruptions",
		"/scrummaster-tales-new-people-on-the-team":
			"/blog/posts/scrummaster-tales-new-people-on-the-team",
		"/books-for-newly-minted-scrum-masters": "/blog/posts/books-for-newly-minted-scrum-masters",
		"/agilescrum-smells": "/blog/posts/agilescrum-smells",
		"/how-to-cross-skill-and-grow-t-shaped-team-members":
			"/blog/posts/how-to-cross-skill-and-grow-t-shaped-team-members",
		"/do-you-suspect-you-have-a-less-than-productive-person-on-your-team":
			"/blog/posts/do-you-suspect-you-have-a-less-than-productive-person-on-your-team",
		"/learning-scrum-through-games": "/blog/posts/learning-scrum-through-games",
		"/the-spotify-model-of-scaling-spotify-doesnt-use-it-neither-should-you":
			"/blog/posts/the-spotify-model-of-scaling-spotify-doesnt-use-it-neither-should-you",
		"/dont-let-sprint-review-be-a-missed-opportunity":
			"/blog/posts/dont-let-sprint-review-be-a-missed-opportunity",
		"/collaboration-over-work-in-isolation": "/blog/posts/collaboration-over-work-in-isolation",
		"/scrum-by-example-scrum-anti-patterns-unplanned-work-disrupting-the-sprint":
			"/blog/posts/scrum-by-example-scrum-anti-patterns-unplanned-work-disrupting-the-sprint",
		"/agile-2008-post-roundup": "/blog/posts/agile-2008-post-roundup",
		"/unit-testing-in-javascript": "/blog/posts/unit-testing-in-javascript",
		"/basic-explanation-of-the-different-parts-of-agile-planning":
			"/blog/posts/basic-explanation-of-the-different-parts-of-agile-planning",
		"/why-having-a-tech-lead-or-manager-as-scrum-master-is-a-bad-idea":
			"/blog/posts/why-having-a-tech-lead-or-manager-as-scrum-master-is-a-bad-idea",
		"/daily-scrum-pain": "/blog/posts/daily-scrum-pain",
		"/scrum-by-example-the-story-of-an-incomplete-sprint":
			"/blog/posts/scrum-by-example-the-story-of-an-incomplete-sprint",
		"/giving-an-taking-design-criticism-with-rebecca-wirfs-brock":
			"/blog/posts/giving-an-taking-design-criticism-with-rebecca-wirfs-brock",
		"/planning-a-change-in-career-laid-off": "/blog/posts/planning-a-change-in-career-laid-off",
		"/minimalist-coding-style": "/blog/posts/minimalist-coding-style",
		"/agile-metrics": "/blog/posts/agile-metrics",
		"/agile-2009-roundup": "/blog/posts/agile-2009-roundup",
		"/scrum-alone-is-not-enough": "/blog/posts/scrum-alone-is-not-enough",
		"/kanban-portfolio-view-continued": "/blog/posts/kanban-portfolio-view-continued",
		"/is-good-good-enough": "/blog/posts/is-good-good-enough",
		"/new-people-on-your-project": "/blog/posts/new-people-on-your-project",
		"/why-are-group-decision-making-techniques-important":
			"/blog/posts/why-are-group-decision-making-techniques-important",
		"/scrum-by-example": "/blog/posts/scrum-by-example",
		"/taking-organizational-improvement-with-scrum-seriously":
			"/blog/posts/taking-organizational-improvement-with-scrum-seriously",
		"/portfolio-management-idle-teams": "/blog/posts/portfolio-management-idle-teams",
		"/antipattern-hardening-sprint": "/blog/posts/antipattern-hardening-sprint",
		"/taking-organizational-improvement-seriously-case-study":
			"/blog/posts/taking-organizational-improvement-seriously-case-study",
		"/learning-story-mapping-exercises": "/blog/posts/learning-story-mapping-exercises",
		"/scrummaster-tales-overtime-on-a-scrum-team-is-an-unhealthy-sign":
			"/blog/posts/scrummaster-tales-overtime-on-a-scrum-team-is-an-unhealthy-sign",
		"/kanban-portfolio-view": "/blog/posts/kanban-portfolio-view",
		"/agile-change-or-adoption-turn-vision-into-strategy":
			"/blog/posts/agile-change-or-adoption-turn-vision-into-strategy",
		"/getting_things_": "/blog/posts/getting_things_",
		"/specialists-are-overrated": "/blog/posts/specialists-are-overrated",
		"/vision-to-user-stories-what-is-the-best-flow":
			"/blog/posts/vision-to-user-stories-what-is-the-best-flow",
		"/scrummaster-tales-stuck-waiting-for-other-teams":
			"/blog/posts/scrummaster-tales-stuck-waiting-for-other-teams",
		"/why-use-an-agile-coach": "/blog/posts/why-use-an-agile-coach",
		"/reinventing-existing-products-big-bite-vs-small-nibble-rewrites":
			"/blog/posts/reinventing-existing-products-big-bite-vs-small-nibble-rewrites",
		"/definition-of-done-user-stories-acceptance-criteria":
			"/blog/posts/definition-of-done-user-stories-acceptance-criteria",
		"/test-driven-development-is-not-a-quality-assurance-technique":
			"/blog/posts/test-driven-development-is-not-a-quality-assurance-technique",
		"/what-are-the-limits-of-the-scrum-framework":
			"/blog/posts/what-are-the-limits-of-the-scrum-framework"
	}
})
