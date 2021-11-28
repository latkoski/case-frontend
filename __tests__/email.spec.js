import { createLocalVue, shallowMount } from "@vue/test-utils";
import Contact from "./../src/components/Contact.vue";

describe("emailValidation", () => {
  it("Check if the email is validating based on the parameter", () => {
    const email = "a.latkoski@gmail.com";

    const localVue = createLocalVue();
    const wrapper = shallowMount(Contact, {
      localVue,
      propsData: {
      },
    });

    wrapper.vm.email = "a.latkoski@gmail.com";

    let emailValidation = wrapper.vm.validateEmail(wrapper.vm.email);

    expect(emailValidation).toBeTruthy();
  });
});
