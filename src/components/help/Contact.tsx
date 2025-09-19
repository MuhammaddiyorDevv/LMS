import React from 'react'
import { MdOutlinePhoneInTalk, MdOutlineMailOutline } from "react-icons/md";


const contacts = [
  {
    id: 1,
    icon: <MdOutlinePhoneInTalk />,
    bg: "bg-[#567D4A] p-1.5",
    label: "Техподдержка",
    value: "+998 00 777 77 77 или 1278",
    link: "tel:+998007777777",
  },
  {
    id: 2,
    icon: <MdOutlineMailOutline />,
    bg: "bg-[#567D4A] p-1.5",
    label: "Электронная почта",
    value: "support@intil.uz",
    link: "mailto:support@intil.uz",
  },
  {
    id: 3,
    icon: <MdOutlinePhoneInTalk />,
    bg: "bg-[#006ADC] p-2.5",
    label: "По рекламе",
    value: "+998 00 999 99 99",
    link: "tel:+998009999999",
  },
  {
    id: 4,
    icon: <MdOutlinePhoneInTalk />,
    bg: "bg-[#D9A055] p-2.5",
    label: "Для сотрудничества",
    value: "+998 00 999 99 99",
    link: "tel:+998009999999",
  },
];

const Contact = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 flex flex-col gap-5 w-[492px] h-auto rounded-2xl">
                <h2 className="font-bold text-[24px]">Контакты</h2>
                <div className="flex flex-col gap-4">
                  {contacts.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[405px] after:border-b after:border-[#E5E7EB] last:after:hidden"
                    >
                      <div
                        className={`${item.bg} rounded-[8px] text-white text-[24px]`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[12px] font-normal text-[#616161]">
                          {item.label}
                        </p>
                        <a
                          href={item.link}
                          className="text-[16px] font-bold text-[#0B0C0B]"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  )
}

export default Contact