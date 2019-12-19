import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class ImagedHeader implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	/**
	 * Empty constructor.
	 */
	constructor() {

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
		// Add control initialization code
		container.appendChild(this.setupHeader(context.parameters.headerText1.raw, context.parameters.fontSize1.raw, context.parameters.backgroundColor1.raw, context.parameters.fontSize1.raw, context.parameters.image1.raw));

		if (((context.parameters.headerText2.raw + "").trim().length > 0))
			container.appendChild(this.setupHeader(context.parameters.headerText2.raw, context.parameters.fontSize2.raw, context.parameters.backgroundColor2.raw, context.parameters.fontSize2.raw, context.parameters.image2.raw));

		if (((context.parameters.headerText3.raw + "").trim().length > 0))
			container.appendChild(this.setupHeader(context.parameters.headerText3.raw, context.parameters.fontSize3.raw, context.parameters.backgroundColor3.raw, context.parameters.fontSize3.raw, context.parameters.image3.raw));
	}

	private setupHeader(headerText: string, fontColor: string, backgroundColor: string, fontSize: string, imageUrl: string): HTMLDivElement {

		var divHeader: HTMLDivElement;
		divHeader = document.createElement("div");
		divHeader.className = "header";

		divHeader.style.font = "'Segoe UI Bold', 'SegoeUI-Semibold', 'Segoe UI Semibold', 'Segoe UI Regular', 'Segoe UI'";
		divHeader.style.color = fontColor;
		divHeader.style.backgroundColor = backgroundColor;
		divHeader.style.fontSize = fontSize;
		divHeader.style.backgroundImage = "";

		let imageSpan: HTMLSpanElement;
		let textSpan: HTMLSpanElement;
		imageSpan = document.createElement("span");
		imageSpan.className = "image-span";

		textSpan = document.createElement("span");
		textSpan.className = "text-span";

		textSpan.innerText = headerText;

		let image: HTMLImageElement;
		image = document.createElement("img");
		image.src = imageUrl;

		imageSpan.appendChild(image);
		divHeader.appendChild(imageSpan);
		divHeader.appendChild(textSpan);

		return divHeader;
	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void {
		// Add code to update control view
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs {
		return {};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void {
		// Add code to cleanup control if necessary
	}
}