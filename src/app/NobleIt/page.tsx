import Image from "next/image";

export default function page() {
  return (
    <div className="px-5 md:px-20 py-10 space-y-12 bg-[#f9f9fc] text-[#333]">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-[#4A00E0]">
        Internship Experience
      </h1>

      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h2 className="text-2xl font-semibold text-[#9d68f9]">Company</h2>
        <p className="mt-2 text-lg">Noble IT Services, Sangli</p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold text-[#9d68f9] mb-2">
            Offer Letter
          </h3>
          <Image
            src="/NobleIt/loa.png"
            alt="Letter of Acceptance"
            width={600}
            height={800}
            className="rounded-md object-cover w-full"
          />
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold text-[#9d68f9] mb-2">
            Internship Letter
          </h3>
          <Image
            src="/NobleIt/loi.png"
            alt="Internship Letter"
            width={600}
            height={800}
            className="rounded-md object-cover w-full"
          />
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h2 className="text-2xl font-semibold text-[#9d68f9]">Project</h2>
        <p className="text-lg font-medium mt-1 mb-5">
          Exam Registration Portal using Blockchain
        </p>

        <div className="space-y-10">
          {[
            {
              name: "Homepage",
              image: "/NobleIt/homepage.png",
              desc: " Responsive NEET-UG Exam Registration Portal homepage with Clerk-based authentication for secure user sign-in and sign-up. Normal users see a “Register Now” button that lets them register for the exam, while admins are shown an “Admin Panel” button to view registered users and edit exam forms. The homepage includes a live countdown to the registration deadline, a scrollable list of news updates, and a detailed section explaining the NEET exam",
            },
            {
              name: "Sign In Page",
              image: "/NobleIt/Signin.png",
              desc: "Authentication is handled using Clerk, allowing users to sign in or sign up securely. The Sign In page offers options to continue with Google or to enter an email address for verification via code or magic link. Upon successful login, normal users are directed to the homepage with a “Register Now” button, while admins see an “Admin Panel” button. Clerk manages user sessions automatically, and users can sign out using the provided logout option, which clears their session and redirects them to the home page.",
            },
            {
              name: "Admin Panel",
              image: "/NobleIt/adminpanel.png",
              desc: "The Admin Panel is a secure section accessible only to users with admin roles. It displays a list of all registered users along with their submitted information, including personal details, uploaded certificates, and form status. Admins can review each form, leave feedback (e.g., “wrong ID card”), approve or reject the form, and update fields such as NEET Rank or mark sheet download status. The edit mode, where admin can modify user data using input fields and a dropdown for approval. This feature showcases effective role-based access control and dynamic data editing in a live interface.",
            },
            {
              name: "Profile Page",
              image: "/NobleIt/profile.png",
              desc: "The Profile page displays personalized details of the logged-in user by securely fetching data from MongoDB based on their Clerk user ID. It shows the user's full name, profile picture, and application updates like form approval status, NEET rank, and marksheet status. Clerk handles authentication, ensuring only the correct user can access their own data. This integration between Clerk and MongoDB ensures secure, real-time, and dynamic profile data rendering. The interface provides a clean and user-friendly experience for candidates to track their registration progress.",
            },
            {
              name: "Help Desk",
              image: "/NobleIt/helpdesk.jpg",
              desc: "The Helpdesk Support form allows users to report issues by submitting their email, a brief problem summary, and a detailed description. Once submitted, the data is securely stored in MongoDB, making it easy for the admin team to track and respond to user queries. The interface also displays an emergency contact number for urgent help. This feature ensures that users can quickly get assistance if they face issues during the registration process. It demonstrates effective form handling, backend integration, and real-time support logging.",
            },
            {
              name: "Edit Form Page",
              image: "/NobleIt/editform.png",
              desc: "This page displays the full details of the logged-in user, including their personal information, uploaded documents, and assigned roll number. Users can view their submitted certificates such as 10th, 12th, caste certificate, ID card, and profile picture in a clean, organized layout. An “Edit Form” button is provided, allowing users to update any incorrect or outdated details directly. All changes made are securely saved to MongoDB, ensuring real-time updates. This feature ensures users have full control over their data while maintaining a professional, user-friendly interface.",
            },
            {
              name: "Register Form",
              image: "/NobleIt/register.png",
              desc: "The Registration Form allows users to enter their personal details and upload required documents like 10th, 12th, caste certificate, ID card, and profile picture. It also includes a built-in payment section where users can make a test payment of 0.01 ETH using the Sepolia Testnet, simulating real Ethereum transactions for educational or demo purposes. All submitted data and files are stored securely in MongoDB. The form ensures a complete and verified submission process before registration is accepted. This feature combines form handling, file uploads, and basic blockchain payment integration.",
            },
            {
              name: "Blockchain Transaction System",
              image: "/NobleIt/transaction.png",
              desc: "In this project, blockchain transactions are handled using MetaMask, a browser extension wallet that connects users to the Ethereum network. When the user clicks on the payment button in the registration form, MetaMask prompts them to confirm a 0.01 ETH transaction on the Sepolia Testnet. Upon confirmation, the payment is securely recorded on the blockchain, simulating a real-world transaction. This process ensures transparency and trust in fee submission. The integration of MetaMask provides a seamless user experience while introducing blockchain-based payment verification.",
            },
          ].map(({ name, image, desc }) => (
            <div key={name} className="grid md:grid-cols-2 items-center gap-6">
              <Image
                src={image}
                alt={name}
                width={600}
                height={400}
                className="rounded-lg shadow object-cover w-full"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#6b4eff] mb-2">
                  {name}
                </h3>
                <p className="text-md text-gray-700 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h2 className="text-2xl font-semibold text-[#9d68f9] mb-4">
          Internship Photos with Mentor
        </h2>
        <p className="text-gray-600 italic">(Coming soon...)</p>
      </section>
    </div>
  );
}
