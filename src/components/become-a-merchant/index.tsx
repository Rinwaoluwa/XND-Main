import React, { ChangeEvent, useRef, useState } from "react";
import useOnClickOutside from "@/hooks/useOnclickOutside";
import Form from "./components/form";

interface BMerchantProps {
  showMerchantForm: boolean;
  setShowMerchantForm: (show: boolean) => void;
}

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  dob: string;
  jobTitle: string;
  company: string;
  merchantType: string;
}

const deviceTypes = [
  { name: 'Mobile', value: 'mobile' },
  { name: 'Desktop', value: 'desktop' }
];

const BMerchant: React.FC<BMerchantProps> = ({
  setShowMerchantForm,
  showMerchantForm,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, showMerchantForm, () => setShowMerchantForm(false));
  const [formValues, setFormValues] = useState<IFormValues>({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    dob: "",
    jobTitle: "",
    company: "",
    merchantType: "",
  });

  const [control, setControl] = useState<{
    type: string
    name: string
  }>({
    type: '',
    name: ''
  });

  const onDeviceTypeChange = (type: any) => {
    setControl(state => ({ ...state, type: type }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(formValues);
  };
  console.log(showMerchantForm);


  return (
    <div className="fixed inset-0 bg-dark bg-opacity-30 backdrop-blur-sm overflow-y-auto z-30 flex items-start justify-center p-4 sm:items-center">
      <div
        className="bg-[#FCFCFC] w-full max-w-[600px] lg:max-w-[850px] p-4 sm:p-6 lg:p-12 rounded-lg mt-4 sm:mt-0"
        ref={ref}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Apply as a merchant</h1>
          <button
            className="text-black p-2"
            onClick={() => setShowMerchantForm(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <p className="text-center text-gray-600 mb-6">
          Apply to become one of our most trusted merchants. Your application will be treated
          and you will be contacted for a potential partnership.
        </p>
        <Form id="apply-as-merchant" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Form.Group>
              <Form.Input
                id="firstname"
                name="firstName"
                placeholder="Enter Firstname"
                type="text"
                value={formValues.firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormValues({ ...formValues, firstName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                id="lastname"
                name="lastName"
                placeholder="Enter Lastname"
                type="text"
                value={formValues.lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormValues({ ...formValues, lastName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                name="email"
                placeholder="Email address"
                id="email"
                value={formValues.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Phone
                placeholder="Mobile number"
                name="phoneNumber"
                id="phoneNo"
                value={formValues.mobileNumber}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormValues({ ...formValues, mobileNumber: e.target.value })
                }
              />
            </Form.Group>
          </div>
          <Form.Group>
            <Form.Date
              placeholder="Add birth date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={formValues.dob}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFormValues({ ...formValues, dob: e.target.value })
              }
            />
          </Form.Group>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Form.Group>
              <Form.Input
                placeholder="Job Title"
                name="jobTitle"
                id="jobTitle"
                value={formValues.jobTitle}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormValues({ ...formValues, jobTitle: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                placeholder="Company"
                name="company"
                id="company"
                value={formValues.company}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormValues({ ...formValues, company: e.target.value })
                }
              />
            </Form.Group>
          </div>
          <Form.Group>
            <Form.Dropdown
              value={formValues.merchantType}
              placeholder='Merchant Type'
              options={deviceTypes}
              onChange={(selected) => setFormValues({ ...formValues, merchantType: selected.value })}
              id='merchant-type-dropdown'
            />
          </Form.Group>
          <div className="flex flex-col sm:flex-row gap-3 justify-end mt-6">
            <a href="https://xnd-frontend.vercel.app/auth/register" className="text-main-primary px-4 py-2 border border-main-primary rounded-full text-center hover:bg-main-primary hover:text-white transition-colors">
              Sign up as a seller
            </a>
            <button type="submit" className="text-white px-4 py-2 bg-main-primary rounded-full text-center hover:bg-opacity-90 transition-colors">
              Send application
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BMerchant;