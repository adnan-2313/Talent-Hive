# Talent Hives

**Talent Hives** is a cutting-edge, full-stack job portal designed to simplify the recruitment process for job seekers and companies alike. Built with modern technologies like **React.js**, **Tailwind CSS**, **Supabase**, and **Clerk Authentication**, it provides an intuitive, responsive, and efficient platform for job application and management.

This project implements real-world functionalities, offering a seamless user experience, and adhering to industry standards.

---

## 🌟 Key Features  

### **For Job Seekers**  
- **Discover Jobs**: Browse through a wide range of job opportunities with advanced search capabilities.  
- **Apply Effortlessly**: Submit applications directly through the portal.  
- **Track Progress**: Monitor the status of applications in real-time.  

### **For Companies**  
- **Job Management**: Create, update, and delete job postings.  
- **Application Tracking**: Manage received applications and update candidate statuses.  
- **Comprehensive Insights**: Gain visibility into application trends and statuses.  

### **General Features**  
- **Authentication**: Secure user authentication powered by **Clerk**.  
- **Realtime Backend**: Supabase integration ensures efficient data handling and real-time updates.  
- **Modern UI**: Styled with **Tailwind CSS** and **Shadcn UI** for a professional and sleek design.  
- **Scalable Architecture**: Built to handle both small and large-scale user bases.  

---

## 🛠️ Technology Stack  

| **Frontend**         | React.js, Tailwind CSS, Shadcn UI |  
|-----------------------|-----------------------------------|  
| **Backend**          | Supabase                         |  
| **Authentication**   | Clerk                            |  
| **Version Control**  | Git, GitHub                      |  
| **Deployment**       | *Vercel* |

## 🌟 Installation and Setup  

Follow these steps to set up the project locally:

```bash
# 1. Clone the repository and navigate to the project folder
git clone https://github.com/adnan-2313/Talent-Hive.git && cd Talent-Hive

# 2. Install dependencies
npm install

# 3. Set up environment variables
echo "VITE_APP_SUPABASE_URL=<your_supabase_url>" >> 
echo "VITE_APP_SUPABASE_KEY=<your_supabase_key>" >> 
echo "VITE_APP_CLERK_API_KEY=<your_clerk_api_key>" >> 

# 4. Start the development server
npm start

