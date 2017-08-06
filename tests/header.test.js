const Header = require("../bc-react/src/components/Header");
const React = require("react");

it("should render a hardcoded header", () => {
  const wrapper = shallow(<div className="header">Breakfast Club</div>);
  expect(wrapper).toMatchSnapshot();
});
