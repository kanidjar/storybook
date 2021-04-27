import { Meta, Story } from '@storybook/angular';
import { ComponentAComponent } from './component-a.component';

export default {
    title: 'Extranet/Component A',
    component: ComponentAComponent
} as Meta;

export const ComponentA: Story = () => ({
    moduleMetadata: {
        declarations: [ComponentAComponent]
    }
});
