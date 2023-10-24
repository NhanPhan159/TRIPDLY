import {useState, ReactNode, ReactElement } from "react";
type TabsProps = {
  children : ReactElement<TabProps>[]
}

export function Tabs({ children }: TabsProps) {
  function findActiveTab(a:any) {
    return a.reduce((accumulator:number, currentValue:ReactElement<TabProps>, i:any) => {
      if (currentValue.props.active) {
        return i;
      }

      return accumulator;
    }, 0);
  }

  function tabValidator(tab:ReactElement<TabProps>) {
    return tab.props.displayName === "Tab" ? true : false;
  }

  const [activeTab, setActiveTab] = useState<Number>(findActiveTab(children));
  return (
    <>
      <div className="inline-flex gap-2 bg-[#2EBBF5] rounded-xl">
        {children.map((item, i) => {
          return (
            <>
              {tabValidator(item) && (
                <Tab
                  key={`tab-${i}`}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  tabName={item.props.tabName}
                  active={item.props.active}
                  displayName="Tab"
                >
                  {item.props.children}
                </Tab>
              )}
            </>
          );
        })}
      </div>
      <div className="p-5 h-[90%]">
        {children.map((item, i) => {
          return (
            <div className={` ${i === activeTab ? "visible h-[90%]" : "hidden"}`}>
              {item.props.children}
            </div>
          );
        })}
      </div>
    </>
  );
}

type TabProps = {
  children?: ReactNode,
  activeTab?: Number,
  currentTab?: Number, 
  tabName?: ReactNode,
  active: boolean,
  displayName: string,
  setActiveTab?: (value: Number) => void
}
export function Tab(props:TabProps): ReactElement{
  return (
    <>
      <div
        className={`px-4 py-1 rounded cursor-pointer border-2 border-[#2EBBF5] font-medium
      ${props.activeTab === props.currentTab ? "bg-white text-[#2EBBF5]" : "bg-[#2EBBF5] text-white"}`}
        onClick={() => props.setActiveTab(props.currentTab)}
      >
        {props.tabName}
      </div>
    </>
  );
}
