



# 🩺 AI Doctor Assistant — Voice Powered Medical SaaS

An intelligent **AI Doctor Assistant** built with **Next.js (TypeScript)**, **TailwindCSS**, and **NEON PostgreSQL**, designed to provide **voice-powered medical consultations**.  
Users can describe their **symptoms**, get **AI-recommended doctors**, and engage in **real-time voice conversations** with the assistant. After each consultation, the system **automatically generates a medical report** summarizing the patient's details, diagnosis, medicines, advice, and conversation history.

---

## 🚀 Features

- 🤖 **AI Doctor Recommendation** — Uses LLM to find suitable doctors based on symptoms or health issues.  
- 🎤 **Voice Conversation** — Interactive voice-based chat between user and AI.  
- 🧾 **Auto Medical Report Generation** — Automatically creates detailed medical reports after each consultation.  
- 🔐 **User Authentication** — Secure login/signup powered by **Clerk**.  
- 🗄️ **Database Integration** — Uses **NEON PostgreSQL** for scalable cloud storage.  
- 🌐 **SaaS Ready** — Built with modular architecture for growth and easy deployment.

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | TailwindCSS |
| **Database** | NEON PostgreSQL |
| **ORM / Query Builder** | Drizzle ORM |
| **Authentication** | Clerk |
| **AI & Voice Engine** | OpenRouter LLM + VAPI Voice Assistant |
| **Package Manager** | npm / yarn |

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```bash
# Database Connection
DATABASE_URL=

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Clerk Routes
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# AI & Voice Assistant
OPEN_ROUTER_API_KEY=
NEXT_PUBLIC_VAPI_VOICE_ASSISTANT_ID=
NEXT_PUBLIC_VAPI_API_KEY=
````

---

## 🧩 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sazzadadib/AI-Doctor-Agent.git
cd AI-Doctor-Agent
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Configure Environment Variables

Add your `.env` file based on the keys above.

### 4️⃣ Run Database Migration (Drizzle)

```bash
npx drizzle-kit push
```

### 5️⃣ Start the Development Server

```bash
npm run dev
```

Visit **[http://localhost:3000](http://localhost:3000)** 🌐

---

## 🧠 How It Works

1. **Symptom Input:** The user describes symptoms using text or voice.
2. **AI Doctor Suggestion:** LLM analyzes the symptoms and suggests a matching doctor.
3. **Voice Consultation:** The user speaks with the AI in real-time using the voice engine.
4. **Medical Report Generation:** After the session, a full report is created including:

   * Patient details
   * Symptoms summary
   * Medicines
   * Doctor’s advice
   * Full conversation transcript

---

## 📁 Project Structure

```
ai-doctor-assistant/
│
├── app/
│   ├── _components/                   # Homepage UI sections
│   │   ├── CTASection.tsx
│   │   ├── FeatureBentoGrid.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── Navbar.tsx
│   │   └── TestimonialsSection.tsx
│   │
│   ├── (auth)/                       # Authentication pages using Clerk
│   │   ├── sign-in/[[...sign-in]]/
│   │   └── sign-up/[[...sign-up]]/
│   │
│   ├── (routes)/                     # Main website routes
│   │   ├── contact/
│   │   ├── dashboard/
│   │   │   ├── _components/          # Dashboard widgets and dialogs
│   │   │   ├── history/
│   │   │   ├── medical-agent/[sessionId]/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── doctors/
│   │   ├── health-tips/
│   │   └── pricing/
│   │
│   ├── api/                          # API routes (Next.js route handlers)
│   │   ├── medical-report/
│   │   ├── session-chat/
│   │   ├── suggest-doctors/
│   │   └── users/
│   │
│   ├── globals.css                   # Global TailwindCSS styles
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Landing page
│   └── provider.tsx                  # App-wide providers
│
├── components/
│   ├── ui/                           # Reusable UI components
│   │   ├── bento-grid.tsx
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── sonner.tsx
│   │   ├── table.tsx
│   │   └── textarea.tsx
│   └── hero-section-demo-1.tsx
│
├── config/
│   ├── db.tsx                        # Database configuration (NEON + Drizzle)
│   ├── OpenAIModel.tsx               # OpenRouter LLM model config
│   └── schema.tsx                    # Database schema definitions
│
├── context/
│   └── UserDetailContext.tsx         # Global user context management
│
├── lib/
│   └── utils.ts                      # Utility functions
│
├── shared/
│   └── list.tsx                      # Shared constants or data lists
│
├── public/                           # Static assets (images, icons, logos)
│
├── drizzle.config.ts                 # Drizzle ORM configuration
├── middleware.ts                     # Middleware for Clerk auth or routes
├── next.config.ts                    # Next.js configuration
├── postcss.config.mjs                # PostCSS / Tailwind setup
├── components.json                   # shadcn/ui config
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```


---


## 💡 Future Enhancements

* 🌍 Multi-language AI support
* 📊 Doctor dashboard with patient analytics
* 📱 Mobile-friendly and PWA version

---

## 🧑‍💻 Author

**📧 Contact:** [sazzadhossainadib@gmail.com](mailto:sazzadhossainadib@gmail.com)

If you like this project, give it a ⭐ **on GitHub** to show your support!

---

## 🛡️ License

Licensed under the **MIT License** — free for personal and commercial use.

---

> 🧠 *“Empowering healthcare through AI-driven voice intelligence.”*

