import 'react-native';
import * as React from 'react';
import ButtonGroup from '../ButtonGroup';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {
  render,
  RenderResult,
} from '@testing-library/react-native';

let props: any;
let component: React.ReactElement;
let testingLib: RenderResult;

const createTestProps = (obj: object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...obj,
});

describe('[ButtonGroup] render', () => {
  beforeEach(() => {
    props = createTestProps({ });
    component = (
      <ButtonGroup {...props} />
    );
  });

  it('renders without crashing', () => {
    const rendered: renderer.ReactTestRendererJSON =
      renderer.create(component).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  describe('interactions', () => {
    beforeEach(() => {
      testingLib = render(component);
    });

    it('should simulate onClick', () => {
      // const btn = testingLib.queryByTestId('btn');
      // act(() => {
      //   fireEvent.press(btn);
      // });
      // expect(cnt).toBe(3);
    });
  });
});