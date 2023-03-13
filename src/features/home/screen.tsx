import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";

import StorybookUIRoot from "../../../storybook";
import { MyStack } from "../../components/MyStack";

export const HomeScreen: FC<
	NativeStackScreenProps<StackNavigatorParams, "home">
> = ({ navigation }) => {
	return (
		<MyStack>
			<StorybookUIRoot />
			{/* <YStack
				space="$4"
				maxWidth={600}
			>
				<H1 textAlign="center">Welcome to Tamagui.</H1>
				<Paragraph textAlign="center">
					Here's a basic starter to show navigating from one screen to another.
				</Paragraph>
			</YStack>

			<YStack space="$5">
				<LinkToUser navigation={navigation} />
				<YGroup
					width="100%"
					separator={<Separator />}
				>
					<ListItem icon={Twitter}>
						<Anchor
							href="https://twitter.com/natebirdman"
							target="_blank"
						>
							Nate
						</Anchor>
					</ListItem>
					<ListItem icon={Github}>
						<Anchor
							href="https://github.com/tamagui/tamagui"
							target="_blank"
							rel="noreferrer"
						>
							Tamagui
						</Anchor>
					</ListItem>
					<ListItem icon={Github}>
						<Anchor
							href="https://github.com/ivopr/tamagui-expo"
							target="_blank"
							rel="noreferrer"
						>
							Template
						</Anchor>
					</ListItem>
				</YGroup>
			</YStack> */}
		</MyStack>
	);
};
