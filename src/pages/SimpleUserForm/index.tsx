import {type SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {type UserFormData, userValidationSchema} from "utils/validationSchemas";
import {FormContainer, FormField, FormTitle, SubmitButton,} from "./SimpleUserForm.styled";
import StyledButton from "components/ui/StyledButton";
import {HStack} from "@chakra-ui/react";
import {PageWithHeader} from "@/shared/Layout/PageWithHeader";

interface SimpleUserFormProps {
    onSubmit?: (data: UserFormData) => void | Promise<void>;
    defaultValues?: Partial<UserFormData>;
}

export const SimpleUserForm: React.FC<SimpleUserFormProps> = ({
                                                                  onSubmit: onSubmitProp,
                                                                  defaultValues,
                                                              }) => {
    const {
        register,
        handleSubmit,
        reset,
        clearErrors,
        formState: {errors, isSubmitting, isValid},
    } = useForm<UserFormData>({
        resolver: zodResolver(userValidationSchema),
        mode: "onChange",
        defaultValues,
    });

    const onSubmit: SubmitHandler<UserFormData> = async (data) => {
        try {
            if (onSubmitProp) {
                await onSubmitProp(data);
            } else {
                console.log("Form Data:", data);
                alert("Form submitted successfully!");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("An error occurred while submitting the form.");
        }
    };

    const handleReset = () => {
        clearErrors();
        reset(defaultValues);
    };


    return (
        <PageWithHeader>
            <FormContainer>
                <FormTitle>User Information Form</FormTitle>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>

                    {/* Full Name */}
                    <FormField
                        label="Full Name *"
                        placeholder="Enter your full name"
                        error={errors.fullName?.message}
                        isInvalid={!!errors.fullName}
                        type="text"
                        {...register("fullName")}
                    />

                    {/* Email */}
                    <FormField
                        label="Email Address *"
                        placeholder="Enter your email address"
                        error={errors.email?.message}
                        isInvalid={!!errors.email}
                        type="email"
                        {...register("email")}
                    />

                    {/* Azure ID */}
                    <FormField
                        label="Azure ID (Optional)"
                        placeholder="Enter your Azure ID"
                        error={errors.azureId?.message}
                        isInvalid={!!errors.azureId}
                        type="text"
                        {...register("azureId")}
                    />

                    <HStack mt="5">
                        <SubmitButton variant="outline" type="submit"
                                      disabled={isSubmitting || !isValid}>
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </SubmitButton>

                        <StyledButton variant="outline" type="button" onClick={handleReset}>
                            Reset Form
                        </StyledButton>
                    </HStack>
                </form>
            </FormContainer>
        </PageWithHeader>
    );
};
