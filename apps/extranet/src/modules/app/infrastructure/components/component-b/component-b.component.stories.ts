import { Meta, Story } from '@storybook/angular';
import { ComponentBComponent } from './component-b.component';

export default {
    title: 'Extranet/Component B',
    component: ComponentBComponent
} as Meta;

export const ComponentB: Story = () => ({
    moduleMetadata: {
        declarations: [ComponentBComponent]
    }
});
