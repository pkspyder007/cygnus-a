import { Tab } from "@headlessui/react"

function Tabs({ tabsList, tabsContent }) {
    return (
        <Tab.Group as="div" className="my-6 bg-[#FAFAFA] rounded-md">
            <Tab.List className="relative space-x-2 px-4 pt-3">
                {tabsList?.map((tab, index) => (
                    <Tab key={index}
                        className={({ selected }) =>
                            `py-2 px-4 inline-block rounded-md ${selected ? 'bg-gray-700' : 'bg-gray-600 hover:bg-gray-700'
                            } text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-600`
                        }
                    >
                        {tab}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels className={""}>
                {tabsContent?.map((tabContent, index) => (
                    <Tab.Panel key={index} className="focus:outline-none">
                        {tabContent}
                    </Tab.Panel>
                ))}

            </Tab.Panels>
        </Tab.Group>
    )
}

export default Tabs
